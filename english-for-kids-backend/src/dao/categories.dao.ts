import categoriesData from '../data/categories';

export default class CategoriesDAO {
  static async getCategories() {
    const categories = categoriesData.map(category => ({id: category.id, name: category.name, imageSrc: category.imageSrc}));
    return Promise.resolve(categories);
  }
}