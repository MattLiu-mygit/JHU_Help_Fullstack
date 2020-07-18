import React, { useState, useEffect } from 'react';
import Collapsible from '../Collapsible';
import { getData } from '../../api/resourceinsecuritiesApi';
import JsxParser from 'react-jsx-parser';

const ResourceInsecurityPage = () => {
  const [resourceInsecurities, setResourceInsecurities] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setResourceInsecurities(data);
    });
  }, []);

  return (
    <>
      <h2>Resource Insecurity</h2>
      {resourceInsecurities.map((data) => (
        <Collapsible
          title={data.main_title}
          content={<JsxParser jsx={data.main_content} />}
        />
      ))}
    </>
  );
};

export default ResourceInsecurityPage;
