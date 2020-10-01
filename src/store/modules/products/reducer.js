import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  filters: {
    categorySelectedId: '',
    filter: '',
  },
};

export default function products(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@product/ADD_PRODUCTS': {
        draft.products = action.payload.products;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.products = [];
        break;
      }
      case '@product/ADD_CATEGORY_SELECTED': {
        draft.filters.categorySelectedId = action.payload.categorySelected;
        break;
      }
      case '@product/REMOVE_CATEGORY_SELECTED': {
        draft.filters.categorySelectedId =
          INITIAL_STATE.filters.categorySelected;
        break;
      }
      case '@product/ADD_FILTER': {
        draft.filters.filter = action.payload.filter;
        break;
      }
      case '@product/REMOVE_FILTER': {
        draft.filters.filter = INITIAL_STATE.filters.filter;
        break;
      }
      default:
        return state;
    }
  });
}
