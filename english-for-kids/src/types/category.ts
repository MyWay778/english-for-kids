export interface CategoryState {
  categories: CategoryType[];
  currentCategory: CurrentCategoryType | null;
}

export interface CurrentCategoryType {
  id: number;
  name: string;
}

export enum CategoryActionsTypes {
  CHANGE_CATEGORY = 'CHANGE_CATEGORY',
  FETCH_CATEGORIES = 'FETCH_CATEGORIES',
}

export interface CategoryType {
  id: number;
  name: string;
  imageSrc: string;
}

interface ChangeCategoryAction {
  type: CategoryActionsTypes.CHANGE_CATEGORY;
  payload: CurrentCategoryType;
}

interface FetchCategoriesAction {
  type: CategoryActionsTypes.FETCH_CATEGORIES;
  payload: CategoryType[];
}

export type CategoryActions = ChangeCategoryAction | FetchCategoriesAction;
 