import React, { useEffect, useState } from 'react';
import Collapsible from './Collapsible';
import { getData } from '../api/maryland911alternativesAPI';
import JsxParser from 'react-jsx-parser';
import { Link } from 'react-router-dom';

const Maryland911Alternatives = () => {
  const [MarylandAlternatives, setMarylandAlternatives] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setMarylandAlternatives(data);
    });
  }, []);

  return (
    <>
      <div className="placeholder"> |</div>
      <div className="jumbotron" style={{ paddingBottom: '0rem' }}>
        <h1>Maryland Alternatives to Calling 911</h1>
        <p style={{ marginTop: '5rem' }}>
          This is a collection of different numbers to find help. To quickly
          find what you need, navigate back to the <Link to="/">home page</Link>{' '}
          and use the search function.
        </p>
      </div>
      <div className="main-content">
        {MarylandAlternatives.map((data) => (
          <Collapsible
            title={data.main_title}
            content={<JsxParser jsx={data.main_content} />}
          />
        ))}
      </div>
    </>
  );
};

export default Maryland911Alternatives;
