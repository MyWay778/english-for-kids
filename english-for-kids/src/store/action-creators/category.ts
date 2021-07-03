import { Dispatch } from 'react';
import { fetchCategoriesFromApi } from '../../mock-api/mock-api';
import { CategoryActions, CategoryActionsTypes, CurrentCategoryType } from '../../types/category';

export const changeCategory =
  (category: CurrentCategoryType) =>
  (dispatch: Dispatch<CategoryActions>): void => {
    dispatch({ type: CategoryActionsTypes.CHANGE_CATEGORY, payload: category });
  };

export const fetchCategories =
  () =>
  async (dispatch: Dispatch<CategoryActions>): Promise<void> => {
    const categories = await fetchCategoriesFromApi();
    dispatch({
      type: CategoryActionsTypes.FETCH_CATEGORIES,
      payload: categories,
    });
  };

export const CategoryActionsCreator = {
  changeCategory,
  fetchCategories,
};
