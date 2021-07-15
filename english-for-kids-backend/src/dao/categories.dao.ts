import categoriesData from '../data/categories';
import {CategoryType, WordForStatType, WordType} from '../types/categories';
import {NewCategoryDataType, NewWordDataType} from '../types/admin';
import generateId from '../helpers/generateId';
import categories from '../data/categories';

export default class CategoriesDAO {
  static async getCategories() {
    const categories = categoriesData.map(category => ({
      id: category.id,
      name: category.name,
      imageSrc: category.imageSrc
    }));
    return Promise.resolve(categories);
  }

  static async getCategoryById(id: number) {
    const category = categoriesData.find(category => category.id === id);
    if (!category) {
      return Promise.reject(new Error(`Category with id ${id} not found`));
    }
    return Promise.resolve(category);
  }

  static async getWordList(): Promise<WordForStatType[]> {
    const wordList: WordForStatType[] = [];
    categoriesData.forEach(category => {
        const {words} = category;
        const reducedWords = words.map(({id, translating, spelling}) => ({
          id,
          translating,
          spelling,
          categoryName: category.name
        }));
        wordList.push(...reducedWords);
      }
    )
    return Promise.resolve(wordList);
  }

  static async getWordsByIds(wordIds: number[]): Promise<WordType[]> {
    const words = categoriesData.reduce((words: WordType[], category: CategoryType): WordType[] => {
      const foundWord = category.words.filter((word) => wordIds.includes(word.id));
      if (foundWord) {
        words.push(...foundWord);
      }
      return words;
    }, []);

    return Promise.resolve(words);
  }

  static async getCategoriesForAdmin() {
    const categories = categoriesData.map(category => ({
      id: category.id,
      name: category.name,
      imageSrc: category.imageSrc,
      wordCount: category.words.length,
    }));
    return Promise.resolve(categories);
  }

  static async editCategory(NewCategoryData: NewCategoryDataType): Promise<CategoryType | {}> {
    return categoriesData.reduce((updatedCat, cat) => {
      if (cat.id === NewCategoryData.id) {
        cat.name = NewCategoryData.name;
        updatedCat = cat;
      }
      return updatedCat;
    }, {});
  }

  static async editWord(NewWordData: NewWordDataType): Promise<WordType | null> {
    const category = categoriesData.find(category => category.id === NewWordData.categoryId);
    if (!category) {
      return Promise.reject();
    }
    const {words} = category;
    let word: WordType | null = null;

    for (let i = 0; i < words.length; i++) {
      if (words[i].id === NewWordData.wordId) {
        words[i].spelling = NewWordData.spelling;
        words[i].translating = NewWordData.translating;
        word = words[i];
      }
    }

    return Promise.resolve(word);
  }

  static async addCategory(category: CategoryType): Promise<CategoryType> {
    const newCategory = {...category, id: generateId()}
    categories.push(newCategory);
    return Promise.resolve(newCategory);
  }

  static async addWord(word: NewWordDataType): Promise<WordType> {
    const category = categories.find(category => category.id === word.categoryId);
    if (!category) {
      return Promise.reject(new Error('Category not found'));
    }

    const {words} = category;
    if (words.length >= 8) {
      return Promise.reject(new Error('Maximum eight words per category'));
    }
    const {translating, spelling} = word;

    const newWord: WordType = {
      id: words.length,
      spelling,
      translating,
      imageSrc: '',
      soundSrc: '',
    }
    words.push(newWord);
    return Promise.resolve(newWord);
  }
}