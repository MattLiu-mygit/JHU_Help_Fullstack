import React, { useState, useEffect } from 'react';
import Collapsible from '../Collapsible';
import { getData } from '../../api/mentalandemotionalApi';
import ReactHtmlParser from 'react-html-parser';

const MentalEmotionalHelp = () => {
  const [mentalAndEmotional, setMentalAndEmotional] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setMentalAndEmotional(data);
    });
  }, []);

  return (
    <>
      <h2>Mental and Emotional Resources</h2>
      <p>
        Some tips for self-care while socializing can be found{' '}
        <a href="https://hub.jhu.edu/2020/03/26/self-care-coronavirus-tips/?utm_source=fb&utm_medium=sm&utm_campaign=covid&utm_content=0327">
          here
        </a>
      </p>
      {mentalAndEmotional.map((data) => {
        const html = data.main_content;
        return (
          <Collapsible
            title={data.main_title}
            content={ReactHtmlParser(html)}
          />
        );
      })}
    </>
  );
};

export default MentalEmotionalHelp;
