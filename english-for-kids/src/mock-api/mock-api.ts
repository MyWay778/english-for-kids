/* eslint-disable import/prefer-default-export */
import { UserLoginDataType } from '../types/app';
import { CardType, CategoryType } from '../types/game';
import { categories } from './data';

export const fetchCategoriesFromApi = (): Promise<CategoryType[]> =>
  Promise.resolve(
    categories.map((category) => {
      const { id, name, imageSrc } = category;
      return { id, name, imageSrc, wordCount: category.words.length };
    })
  );

export const fetchCardsFromApi = (categoryId: number): CardType[] | null => {
  const foundCategory = categories.find(
    (category) => category.id === categoryId
  );
  return foundCategory ? (foundCategory.words as CardType[]) : null;
};

export const authorizeFromApi = (
  userData: UserLoginDataType
): Promise<number> => {
  let status = 401;
  if (userData.login === 'admin' && userData.password === '12345') {
    status = 200;
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(status);
    }, 1000);
  });
};
