const paginate = (jobs, index) => {
  const jobsPerPage = 10;
  const start = index * jobsPerPage;
  return jobs?.slice(start, start + jobsPerPage);
};
export default paginate;
