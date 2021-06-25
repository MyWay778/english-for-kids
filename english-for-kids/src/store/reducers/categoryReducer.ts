import {
  CategoryActions,
  CategoryActionsTypes,
  CategoryState,
} from '../../types/category';

const initialState: CategoryState = {
  categories: [],
  currentCategoryId: null,
};

const categoryReducer = (
  state = initialState,
  action: CategoryActions
): CategoryState => {
  switch (action.type) {
    case CategoryActionsTypes.CHANGE_CATEGORY:
      return { ...state, currentCategoryId: action.payload };
    case CategoryActionsTypes.FETCH_CATEGORIES: 
      return {...state, categories: action.payload}
    default:
      return state;
  }
};

export default categoryReducer;
