const createStore = require('redux').createStore;

// Actions
const BUY_CAR = 'BUY_CAR';
const BUY_MOTORBIKE = 'BUY_MOTORBIKE';
const RETURN_CAR = 'RETURN_CAR';
const RETURN_MOTORBIKE = 'RETURN_MOTORBIKE';

/**
 * Action to buy a product in the shop
 * @param {number} qty Quantity of products to buy
 * @param {string} type Type of buy action
 * @returns redux action
 */
const buy_product = (qty, type) => {
    return {
        type: type,
        payload: qty
    }
}

/**
 * Action to return a product in the shop
 * @param {number} qty Quantity of products to return 
 * @param {string} type Type of return action
 * @returns redux action
 */
const return_product = (qty, type) => {
    return {
        type: type,
        payload: qty
    }
}



// Reducers
const default_products_sate = {
    car: 10,
    motorbike: 5
}


const games_reducer = (state = default_products_sate, action) => {
    switch(action.type){
        case BUY_CAR: {
            return {
                ...state,
                car: state.car - action.payload
            }
        }
        case BUY_MOTORBIKE: {
            return {
                ...state,
                motorbike: state.motorbike - action.payload
            }
        }
        case RETURN_CAR: {
            return {
                ...state,
                car: state.car + action.payload
            }
        }
        case RETURN_MOTORBIKE: {
            return {
                ...state,
                motorbike: state.motorbike + action.payload
            }
        }
        default: return state;
    }
}
// Store
const store = createStore(games_reducer);
console.log('Initial state: ', store.getState());
store.subscribe(() => {
    console.log('State change: ', store.getState())
});
store.dispatch(buy_product(3, BUY_CAR));
store.dispatch(return_product(1, RETURN_CAR));
store.dispatch(buy_product(2, BUY_MOTORBIKE));
store.dispatch(return_product(3, RETURN_MOTORBIKE));