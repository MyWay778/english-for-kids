export interface NewCategoryDataType {
  id: number;
  name: string;
}

export interface NewWordDataType {
  categoryId: number;
  wordId: number;
  spelling: string;
  translating: string;
}