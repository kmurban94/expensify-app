import {createStore} from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy 
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy 
});

const set = ({ count } ) => ({
    type: 'SET',
    count: count 
});

const reset = () => ({
    type: 'RESET',
    count: 0
});

// Reducers
// 1. are pure functions
// 2. never change state or action. return new object!!

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT' :
            

            return {
                count: state.count - action.decrementBy
            };
        case 'RESET' :
            return {
                count: 0
            };
        case 'SET' :
            return {
                count : action.count
            }
        default: 
            return state;
    }
    
};        

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(decrementCount());

store.dispatch(set({count : 100}));

store.dispatch(reset());

