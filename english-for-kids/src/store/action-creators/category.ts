import { Dispatch } from 'react';
import { fetchCategoriesFromApi } from '../../mock-api/mock-api';
import { CategoryActions, CategoryActionsTypes } from '../../types/category';

export const changeCategory =
  (categoryId: number) =>
  (dispatch: Dispatch<CategoryActions>): void => {
    dispatch({ type: CategoryActionsTypes.CHANGE_CATEGORY, payload: categoryId });
  };

export const fetchCategories =
  () =>
  (dispatch: Dispatch<CategoryActions>): void => {
    const categories = fetchCategoriesFromApi();
    dispatch({
      type: CategoryActionsTypes.FETCH_CATEGORIES,
      payload: categories,
    });
  };

export const CategoryActionsCreator = {
  changeCategory,
  fetchCategories,
};
