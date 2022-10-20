const filterJobs = (array, debouncedSearch) => {
  return array?.filter(
    (value) =>
      !debouncedSearch ||
      value.title?.toLowerCase().includes(debouncedSearch?.toLowerCase())
  );
};
export default filterJobs;
