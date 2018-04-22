import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () =>{
    const state = expensesReducer(undefined, {
        type: '@@INIT'
    });
    expect(state).toEqual([]);
});
 
test('should remove an expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove an expense if not there', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '4'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should not edit an expense if not there', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '4',
        updates: {
            description: 'nutt'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit an expense', () => {
    const amount = 122000;
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'nutt',
        amount: 5,
        note: '',
        createdAt: 7
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should set expenses', () => {
    const expensesAfter = [expenses[1]];
    const action = {
        type: 'SET_EXPENSES',
        expenses: expensesAfter
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expensesAfter);
});