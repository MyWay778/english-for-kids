export interface CategoryState {
  categories: CategoryType[];
  currentCategoryId: number | null;
}

export enum CategoryActionsTypes {
  CHANGE_CATEGORY = 'CHANGE_CATEGORY',
  FETCH_CATEGORIES = 'FETCH_CATEGORIES',
}

export interface CategoryType {
  id: number;
  title: string;
  imageSrc: string;
}

interface ChangeCategoryAction {
  type: CategoryActionsTypes.CHANGE_CATEGORY;
  payload: number;
}

interface FetchCategoriesAction {
  type: CategoryActionsTypes.FETCH_CATEGORIES;
  payload: CategoryType[];
}

export type CategoryActions = ChangeCategoryAction | FetchCategoriesAction;
