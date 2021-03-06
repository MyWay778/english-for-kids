export interface NewCategoryDataType {
  id: number;
  name: string;
  imageFile?: string;
}

export interface NewWordDataType {
  categoryId: number;
  wordId: number;
  spelling: string;
  translating: string;
  imageFile?: string;
}