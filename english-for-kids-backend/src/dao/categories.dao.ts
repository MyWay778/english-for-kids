import categoriesData from '../data/categories';
import {CategoryType, WordForStatType, WordType} from '../types/categories';

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
}