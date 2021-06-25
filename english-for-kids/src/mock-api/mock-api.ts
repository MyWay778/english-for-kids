import { CardType } from '../types/cards';
import { CategoryType } from '../types/category';

// eslint-disable-next-line import/prefer-default-export
export const fetchCategoriesFromApi = (): CategoryType[] => [
  {
    id: 1,
    title: 'Action (set A)',
    imageSrc:
      'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/swim.jpg',
  },
  {
    id: 2,
    title: 'Action (set B)',
    imageSrc:
      'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/sing.jpg',
  },
  {
    id: 3,
    title: 'Action (set C)',
    imageSrc:
      'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/play.jpg',
  },
  {
    id: 4,
    title: 'Adjective',
    imageSrc:
      'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/scared.jpg',
  },
  {
    id: 5,
    title: 'Animal (set A)',
    imageSrc:
      'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/bird.jpg',
  },
  {
    id: 6,
    title: 'Animal (set B)',
    imageSrc:
      'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/lion.jpg',
  },
  {
    id: 7,
    title: 'Clothes',
    imageSrc:
      'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/boot.jpg',
  },
  {
    id: 8,
    title: 'Emotion',
    imageSrc:
      'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/smile.jpg',
  },
];

export const fetchCardsFromApi = (categoryId: number): CardType[] | null => {
  if (categoryId === 1) {
    return [
      {
        id: 1,
        title: 'Cry',
        translatedTitle: 'Плакать',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/cry.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/cry.mp3',
      },
      {
        id: 2,
        title: 'Dance',
        translatedTitle: 'Танцевать',
        imageSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/dance.jpg',
        soundSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/dance.mp3',
      },
      {
        id: 3,
        title: 'Dive',
        translatedTitle: 'Нырять',
        imageSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/dive.jpg',
        soundSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/dive.mp3',
      },
      {
        id: 4,
        title: 'Draw',
        translatedTitle: 'Рисовать',
        imageSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/draw.jpg',
        soundSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/draw.mp3',
      },
      {
        id: 5,
        title: 'Fish',
        translatedTitle: 'Ловить рыбу',
        imageSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/fish.jpg',
        soundSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/fish.mp3',
      },
      {
        id: 6,
        title: 'Fly',
        translatedTitle: 'Летать',
        imageSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/fly.jpg',
        soundSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/fly.mp3',
      },
      {
        id: 7,
        title: 'Hug',
        translatedTitle: 'Обнимать',
        imageSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/hug.jpg',
        soundSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/hug.mp3',
      },
      {
        id: 8,
        title: 'Jump',
        translatedTitle: 'Прыгать',
        imageSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/jump.jpg',
        soundSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/jump.mp3',
      },
    ];
  }
  return null;
};
