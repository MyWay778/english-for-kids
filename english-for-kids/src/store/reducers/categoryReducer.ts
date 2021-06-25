import {
  CategoryActions,
  CategoryActionsTypes,
  CategoryState,
} from '../../types/category';

const initialState: CategoryState = {
  categories: [],
  currentCategory: null,
};

const categoryReducer = (
  state = initialState,
  action: CategoryActions
): CategoryState => {
  switch (action.type) {
    case CategoryActionsTypes.CHANGE_CATEGORY:
      return { ...state, currentCategory: action.payload };
    default:
      return state;
  }
};

export default categoryReducer;
