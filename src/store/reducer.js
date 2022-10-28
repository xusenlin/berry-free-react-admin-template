import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import categoryReducer from './categoryReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    category: categoryReducer
});

export default reducer;
