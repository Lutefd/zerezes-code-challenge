const paginate = (jobs) => {
  const jobsPerPage = 10;
  const page = Math.ceil(jobs.data?.length / jobsPerPage);
  const newJobs = Array.from({ length: page }, (_, index) => {
    const start = index * jobsPerPage;
    return jobs.data?.slice(start, start + jobsPerPage);
  });
  return newJobs;
};
export default paginate;
