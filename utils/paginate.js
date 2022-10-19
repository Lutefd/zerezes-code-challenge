const paginate = (elements, page) => {
  const elementsPerPage = 12;
  const start = page * elementsPerPage;
  return elements?.slice(start, start + elementsPerPage);
};
export default paginate;
