// action - state management
import * as actionTypes from './actions';

export const initialState = [
    {
        ID: 1,
        Name: 'k8sDev'
    },
    {
        ID: 2,
        Name: '测试环境'
    },
    {
        ID: 4,
        Name: '预发布环境'
    }
];

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CATEGORY:
            return state;
        default:
            return state;
    }
};

export default categoryReducer;
