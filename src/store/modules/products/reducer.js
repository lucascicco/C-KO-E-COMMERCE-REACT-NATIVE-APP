import produce from 'immer'

const INITIAL_STATE = {
    products: []
};

export default function products(state = INITIAL_STATE, action){
    return produce(state, draft => {
        switch(action.type){
            case '@product/ADD_PRODUCTS': {
                draft.products = action.payload.products;
                break
            }  
            case '@auth/SIGN_OUT':{
                draft.products = [];
                break;
            }
            default:
                return state;
        }     
    })
}