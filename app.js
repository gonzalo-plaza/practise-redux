const {createStore, combineReducers} = require('redux');

// Actions
const BUY_CAR = 'BUY_CAR';
const BUY_MOTORBIKE = 'BUY_MOTORBIKE';
const RETURN_CAR = 'RETURN_CAR';
const RETURN_MOTORBIKE = 'RETURN_MOTORBIKE';

const BUY_CAR_MIRROR = 'BUY_CAR_MIRROR';
const BUY_MOTORBIKE_MIRROR = 'BUY_MOTORBIKE_MIRROR';
const RETURN_CAR_MIRROR = 'RETURN_CAR_MIRROR';
const RETURN_MOTORBIKE_MIRROR = 'RETURN_MOTORBIKE_MIRROR';

/**
 * Action to buy a product in the shop
 * @param {number} qty Quantity of vehicles to buy
 * @param {string} type Type of buy action
 * @returns redux action
 */
const product_action = (qty, type) => {
    return {
        type: type,
        payload: qty
    }
}

// Reducers
const default_vehicles_sate = {
    car: 10,
    motorbike: 5
}

const default_accesories_state = {
    car_mirror: 5,
    motorbike_mirror: 10
}


const accesories_reducer = (state = default_accesories_state, action) => {
    switch(action.type){
        case BUY_CAR_MIRROR: {
            return {
                ...state,
                car_mirror: state.car_mirror - action.payload
            }
        }
        case BUY_MOTORBIKE_MIRROR: {
            return {
                ...state,
                motorbike_mirror: state.motorbike_mirror - action.payload
            }
        }
        case RETURN_CAR_MIRROR: {
            return {
                ...state,
                car_mirror: state.car_mirror + action.payload
            }
        }
        case RETURN_MOTORBIKE_MIRROR: {
            return {
                ...state,
                motorbike_mirror: state.motorbike_mirror + action.payload
            }
        }
        default: return state;
    }
}

const vehicles_reducer = (state = default_vehicles_sate, action) => {
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

const rootReducers = combineReducers({
    vehicles_reducer,
    accesories_reducer
});


// Store
const store = createStore(rootReducers);
console.log('Initial state: ', store.getState());
store.subscribe(() => {
    console.log('State change: ', store.getState())
});

store.dispatch(product_action(3, BUY_CAR));
store.dispatch(product_action(3, RETURN_CAR_MIRROR));