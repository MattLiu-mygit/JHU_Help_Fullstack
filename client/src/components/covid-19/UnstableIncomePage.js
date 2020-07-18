import React, { useEffect, useState } from 'react';
import { getData } from '../../api/unstableincomeApi';
import Collapsible from '../Collapsible';
import JsxParser from 'react-jsx-parser';

const UnstableIncomePage = () => {
  const [unstableIncome, setUnstableIncome] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setUnstableIncome(data);
    });
  }, []);

  return (
    <>
      <h2>Unstable Income</h2>
      {unstableIncome.map((data) => (
        <Collapsible
          title={data.main_title}
          content={<JsxParser jsx={data.main_content} />}
        />
      ))}
    </>
  );
};
export default UnstableIncomePage;
