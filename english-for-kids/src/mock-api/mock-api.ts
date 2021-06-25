import { CategoryType } from '../types/category';

// eslint-disable-next-line import/prefer-default-export
export const fetchCategoriesFromApi = (): CategoryType[] => [
  { title: 'Action (set A)', imageSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/swim.jpg' },
  { title: 'Action (set B)', imageSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/sing.jpg' },
  { title: 'Action (set C)', imageSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/play.jpg' },
  { title: 'Adjective', imageSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/scared.jpg' },
  { title: 'Animal (set A)', imageSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/bird.jpg' },
  { title: 'Animal (set B)', imageSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/lion.jpg' },
  { title: 'Clothes', imageSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/boot.jpg' },
  { title: 'Emotion', imageSrc: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/smile.jpg' },
];
