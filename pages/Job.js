import React from 'react';
import moment from 'moment';
const Job = ({ company_name, title, remote, url, location, created_at }) => {
  const date = moment.unix(created_at).format('lll');
  return (
    <article className="card">
      <div className="">
        <h3>{title}</h3>
        <p>Criado em: {date}</p>
      </div>
      <div className="">
        <div className="">
          <h4>{company_name}</h4>
          <h5>Icon {remote ? 'Remoto' : `${location}`}</h5>
        </div>
        <a href={url} className="btn">
          Saiba Mais
        </a>
      </div>
    </article>
  );
};
export default Job;
