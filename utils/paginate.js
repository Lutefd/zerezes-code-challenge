import { Constants } from './constants';
const paginate = (elements, currentPage) => {
  const { elementsPerPage } = Constants();
  const start = currentṔage * elementsPerPage;
  return elements?.slice(start, start + elementsPerPage);
};
export default paginate;
