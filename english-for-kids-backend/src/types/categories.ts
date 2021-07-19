export interface WordForStatType {
  id: number;
  categoryName: string;
  spelling: string;
  translating: string;
}

export interface CategoryType {
  id: number;
  name: string,
  imageSrc: string;
  words: WordType[];
}

export interface AdminCategoryType {
  id: number;
  name: string,
  imageSrc: string;
  wordCount: number;
}

export interface WordType {
  id: number;
  spelling: string;
  translating: string;
  imageSrc: string;
  soundSrc: string;
}