/* eslint-disable import/prefer-default-export */
import { UserLoginDataType } from '../types/app';
import { CardType, CategoryType } from '../types/game';
import { categories } from './data';

export const fetchCategoriesFromApi = (): Promise<CategoryType[]> =>
  Promise.resolve(
    categories.map((category) => {
      const { id, name, imageSrc } = category;
      return { id, name, imageSrc };
    })
  );

export const fetchCardsFromApi = (categoryId: number): CardType[] | null => {
  const foundCategory = categories.find((category) => category.id === categoryId)
  return foundCategory ? (foundCategory.words as CardType[]) : null;
};

export const authorizeFromApi = (userData: UserLoginDataType): Promise<number> => {
  let status = 401;
  if (userData.login === 'admin' && userData.password === '12345') {
    status = 200;
  }
  return new Promise(resolve => {
    setTimeout(() => {resolve(status)}, 1000);
  })
}

// export const fetchCardsFromApi = (categoryId: number): CardType[] | null => {
//   if (categoryId === 1) {
//     return [
//       {
//         id: 1,
//         title: 'Cry',
//         translatedTitle: 'Плакать',
//         imageSrc:
//           'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/cry.jpg',
//         soundSrc:
//           'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/cry.mp3',
//       },
//       {
//         id: 2,
//         title: 'Dance',
//         translatedTitle: 'Танцевать',
//         imageSrc:
//           'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/dance.jpg',
//         soundSrc:
//           'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/dance.mp3',
//       },
//       {
//         id: 3,
//         title: 'Dive',
//         translatedTitle: 'Нырять',
//         imageSrc:
//           'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/dive.jpg',
//         soundSrc:
//           'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/dive.mp3',
//       },
//       {
//         id: 4,
//         title: 'Draw',
//         translatedTitle: 'Рисовать',
//         imageSrc:
//           'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/draw.jpg',
//         soundSrc:
//           'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/draw.mp3',
//       },
//       {
//         id: 5,
//         title: 'Fish',
//         translatedTitle: 'Ловить рыбу',
//         imageSrc:
//           'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/fish.jpg',
//         soundSrc:
//           'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/fish.mp3',
//       },
//       {
//         id: 6,
//         title: 'Fly',
//         translatedTitle: 'Летать',
//         imageSrc:
//           'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/fly.jpg',
//         soundSrc:
//           'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/fly.mp3',
//       },
//       {
//         id: 7,
//         title: 'Hug',
//         translatedTitle: 'Обнимать',
//         imageSrc:
//           'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/hug.jpg',
//         soundSrc:
//           'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/hug.mp3',
//       },
//       {
//         id: 8,
//         title: 'Jump',
//         translatedTitle: 'Прыгать',
//         imageSrc:
//           'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/jump.jpg',
//         soundSrc:
//           'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/jump.mp3',
//       },
//     ];
//   }
//   return null;
// };
