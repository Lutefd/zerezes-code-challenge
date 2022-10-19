import { Constants } from './constants';
const paginate = (elements, page) => {
  const { elementsPerPage } = Constants();
  const start = page * elementsPerPage;
  return elements?.slice(start, start + elementsPerPage);
};
export default paginate;
