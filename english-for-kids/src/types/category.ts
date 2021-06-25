export interface CategoryState {
  categories: CategoriesType[];
  currentCategory: CategoriesType | null;
}

export type CategoriesType = 'animal';

export enum CategoryActionsTypes {
  CHANGE_CATEGORY = 'CHANGE_CATEGORY',
}

interface ChangeCategoryAction {
  type: CategoryActionsTypes.CHANGE_CATEGORY;
  payload: CategoriesType;
}

export type CategoryActions = ChangeCategoryAction;
