import Head from 'next/head';
import { useState, useEffect } from 'react';
import Job from './Job';
import { useFetch } from '../hooks/useFetch';
import paginate from '../utils/paginate';
export default function Home() {
  const { jobs, debouncedSearch, setSearch, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [items, setItems] = useState([]);
  const jobsFilter = jobs.data?.filter((value) => {
    if (debouncedSearch === ``) {
      return value;
    } else if (debouncedSearch === null) {
      return value;
    } else if (
      value.title?.toLowerCase().startsWith(debouncedSearch?.toLowerCase())
    ) {
      return value;
    }
  });
  const amountOfPages = Math.ceil(jobsFilter?.length / 10);
  const handlePage = (index) => {
    setPage(index);
  };
  useEffect(() => {
    if (loading) return;
    setItems(paginate(jobsFilter, page));
  }, [loading, page, jobsFilter]);
  return (
    <div className="">
      <Head>
        <title>Zerezes Code Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid place-items-center	">
        <h1>oi</h1>
        <input
          type="search"
          placeholder="Pesquisar"
          onChange={(e) => {
            setSearch(e.target.value);
            setTimeout(() => {
              handlePage(0);
            }, 500);
          }}
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <section className="flex flex-col gap-2 justify-center items-center">
          {!loading && (
            <div className="container">
              {paginate(jobsFilter, page)?.map((job) => {
                return <Job key={job.slug} {...job} />;
              })}
            </div>
          )}
          {!loading && (
            <div className="btn-group">
              {jobsFilter
                ?.filter((_, results) => results < amountOfPages)
                .map((item, index) => {
                  return (
                    <button
                      key={index}
                      className={`btn ${index === page ? 'btn-active' : null}`}
                      onClick={() => handlePage(index)}
                    >
                      {index + 1}
                    </button>
                  );
                })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
