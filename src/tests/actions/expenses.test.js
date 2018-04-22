import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '1'});
    expect(action).toEqual({type: 'REMOVE_EXPENSE', id: '1'});
})

test('should setup edit expense action object', () => {
    const action = editExpense('1', {test: 'test'});
    expect(action).toEqual({type: 'EDIT_EXPENSE', id: '1', updates: {test: 'test'}});
})

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE', 
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description : 'mouse',
        amount: 3000,
        note: 'better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {}
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description : '', 
                note : '', 
                amount : 0, 
                createdAt : 0
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual({
            description : '', 
            note : '', 
            amount : 0, 
            createdAt : 0
        });
        done();
    });
});
// test('should setup add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({type: 'ADD_EXPENSE', expense: {
//         description: '',
//         amount: 0,
//         note: '',
//         createdAt: 0,
//         id: expect.any(String)
//     }});
// })