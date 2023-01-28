const createStore = require('redux').createStore;

// Actions

// Reducers
const default_products_sate = {
    car: 10
}


const games_reducer = (state = default_products_sate, action) => {
    switch(action.type){
        default: return state;
    }
}
// Store
const store = createStore(games_reducer);
console.log('Initial state: ', store.getState());