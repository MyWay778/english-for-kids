import categories from '../data/categories';

const generateId = (() => {
  let count = categories.length;
  return (): number => ++count;
})();

export default generateId;