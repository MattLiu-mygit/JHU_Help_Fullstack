import React, { useState, useEffect } from 'react';
import Collapsible from '../Collapsible';
import JsxParser from 'react-jsx-parser';
import { getData } from '../../api/racismhatecrimesApi';

const ReportPage = () => {
  const [racismHateCrimes, setracismHateCrimes] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setracismHateCrimes(data);
    });
  }, []);
  return (
    <>
      <h2>Report Racism/Hate Crimes</h2>
      {racismHateCrimes.map((data) => (
        <Collapsible
          title={data.main_title}
          content={<JsxParser jsx={data.main_content} />}
        />
      ))}
      {/* <Collapsible
        className='outerCollapsible'
        title='Anywhere'
        content={
          <>
            <p>
              An online reporting center for Asians created by California-based
              Asian Pacific Policy and Planning Council. Use it to disclose
              instances of bias and hate, with the hope of providing victims
              with legal assistance and connecting them to resources such as
              school districts and law enforcement.
            </p>
            <p>
              Submit a report{' '}
              <a href='http://www.asianpacificpolicyandplanningcouncil.org/stop-aapi-hate/?fbclid=IwAR0azf-Es4rXStcnK89DjSUVkiFRbpA1s4KPUfvRGsEXWQTD_YDuppNlvmg'>
                here
              </a>
              .
            </p>
            <p>
              Forms are in multiple languages:
              <li>English</li>
              <li>Chinese (Traditional)</li>
              <li>Chinese (Simplified)</li>
              <li>Japanese</li>
              <li>Khmer</li>
              <li>Korean</li>
              <li>Thai</li>
              <li>Vietnamese</li>
            </p>
          </>
        }
      />
      <Collapsible
        className='outerCollapsible'
        title='Report Hate Crimes'
        content={
          <>
            <p>
              Hotline used in <b>New York City</b>.
            </p>
            <p>
              New Yorkers looking to report hate crimes and bias incidents can
              email the Attorney General’s Civil Rights Bureau or call
              1-800-771-7755.
            </p>
          </>
        }
      /> */}
    </>
  );
};
export default ReportPage;
