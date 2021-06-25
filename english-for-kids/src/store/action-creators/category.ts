import { Dispatch } from 'react';
import {
  CategoriesType,
  CategoryActions,
  CategoryActionsTypes,
} from '../../types/category';

// eslint-disable-next-line import/prefer-default-export
export const changeCategory =
  (category: CategoriesType) =>
  (dispatch: Dispatch<CategoryActions>): void => {
    dispatch({ type: CategoryActionsTypes.CHANGE_CATEGORY, payload: category });
  };

export const CategoryActionsCreator = {
  changeCategory,
};
