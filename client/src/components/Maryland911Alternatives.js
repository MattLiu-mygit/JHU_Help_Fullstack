import React, { useEffect, useState } from 'react';
import Collapsible from './Collapsible';
import { getData } from '../api/maryland911alternativesAPI';
import JsxParser from 'react-jsx-parser';

const Maryland911Alternatives = () => {
  const [MarylandAlternatives, setMarylandAlternatives] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setMarylandAlternatives(data);
    });
  }, []);

  // const hereCheck = (innerData) => {
  //   let begin = innerData;
  //   let end = '';
  //   for (let i = 0; i < innerData.length; i++) {
  //     let check = innerData.substring(i, innerData.length);
  //     if (check === 'here.') {
  //       begin = innerData.substring(0, i);
  //       end = check;
  //       console.log('found');
  //       break;
  //     }
  //   }
  //   return { begin, end };
  // };

  return (
    <>
      <div className="jumbotron">
        <h1>Maryland Alternatives to Calling 911</h1>
      </div>
      {MarylandAlternatives.map((data) => (
        <Collapsible
          title={data.main_title}
          content={<JsxParser jsx={data.main_content} />}
        />
      ))}
      {/* <Collapsible
          key={outerData._id}
          title={outerData.main_title}
          content={outerData.main_content.map((middleData) => {
            const urlCount = middleData.urls.length;
            let onUrl = 0;
            return (
              <>
                <p>
                  <b>{middleData.title}</b>
                </p>
                {urlCount > 0 && onUrl < urlCount
                  ? middleData.content.map((innerData) => {
                      const { begin, end } = hereCheck(innerData);
                      return (
                        <p key={innerData.id}>
                          {begin}
                          <a href={middleData.urls[onUrl]}>{end}</a>
                        </p>
                      );
                    })
                  : middleData.content.map((innerData) => <p>{innerData}</p>)}
              </>
            );
          })}
        /> */}
      {/* <Collapsible
        className="outerCollapsible"
        title="General Referral Hotline"
        content={
          <>
            <p>Hotline: 211</p>
            <p>
              An Information hotline designed to help the caller connect with
              any needed emergency resources in the local area.{' '}
            </p>
          </>
        }
      />
      <Collapsible
        className="outerCollapsible"
        title="Sexual Assault/Violence"
        content={
          <>
            <p>
              <b>Baltimore City Sexual Assault Hotline</b>
            </p>
            <p>Hotline: (443) 279-0379</p>
            <p>
              More info can be found at the Maryland Coalition for Sexual
              Assault(MCASA) <a href="www.mcasa.org ">here</a>.
            </p>
            <p>
              Additional info can be found at Turnaround Inc.{' '}
              <a href="http://www.turnaroundinc.org/">here</a>.
            </p>
            <p>
              Offers 24 hour hotline, legal services, and shelter through
              collaborating hotels.{' '}
            </p>

            <p>
              <b>Mercy Medical Center</b>
            </p>
            <p>Hotline: (410) 332-9494</p>
            <p>
              Address: Mercy Medical Center, FNE-A, 345 St. Paul Place,
              Baltimore, MD 21202
            </p>
            <p>
              Free Sexual Assault Forensic Exams (SAFEs) even if you choose not
              to involve the police.
            </p>
          </>
        }
      />
      <Collapsible
        className="outerCollapsible"
        title="Human Trafficking"
        content={
          <>
            <p>
              National Human Trafficking Resource Center (National Hotline):
              (888) 373-7888
            </p>
            <p>Text: 233733 (BEFREE)</p>
            <p>
              Takes reports of human trafficking and connects callers to local
              anti-trafficking resources.
            </p>
            <p>
              Find out more{' '}
              <a href="http://www.traffickingresourcecenter.org">here</a>.
            </p>
          </>
        }
      />
      <Collapsible
        className="outerCollapsible"
        title="Domestic Violence & Abuse"
        content={
          <>
            <p>Maryland Domestic Violence Hotline: (410) 889-RUTH (7884)</p>
            <p>
              Find out more <a href="www.hruth.org/get-help/ ">here</a>.
            </p>
          </>
        }
      />
      <Collapsible
        className="outerCollapsible"
        title="Mental Health"
        content={
          <>
            <p>Baltimore Crisis Response: (410) 433-5175</p>
            <p>National Suicide Prevention Lifeline: (800) 273-TALK (8255)</p>
          </>
        }
      />
      <Collapsible
        className="outerCollapsible"
        title="Youth/Abuse"
        content={
          <>
            <Collapsible
              title="Baltimore City Child Abuse Center"
              content={<p>Hotline: (410) 361-2235</p>}
            />
            <Collapsible
              title="Baltimore Child and Adolescent Response System"
              content={
                <>
                  <p>Hotline: (667) 600-2880</p>
                  <p>Address: 1118 Light Street 200 Baltimore MD 21230</p>
                  <p>
                    Provides psychiatric care, urgent care clinic, and home
                    based service for a limited time.
                  </p>
                </>
              }
            />
            <Collapsible
              title="National Youth Peer Counseling Line"
              content={<p>Hotline: (877) 968-8454</p>}
            />
          </>
        }
      />
      <Collapsible
        className="outerCollapsible"
        title="LGBTQ+"
        content={
          <>
            <Collapsible
              title="The Trevor Project (24/7 Hotline)"
              content={
                <>
                  <p>Phone: (866) 488-7386</p>
                  <p>Text ‘START’ to 678-678</p>
                  <p>
                    Find out more{' '}
                    <a href="https://www.thetrevorproject.org/get-help-now/ ">
                      here
                    </a>
                  </p>
                </>
              }
            />
            <Collapsible
              title="Trans Lifeline"
              content={<p>Hotline: (877) 565-8860</p>}
            />
          </>
        }
      />
      <Collapsible
        className="outerCollapsible"
        title="HomelessNess"
        content={
          <>
            <p>Hotline: 211</p>
            <p>
              Call this number to contact a 24/7 resource that will connect you
              with local homeless shelters and other resources in the Baltimore
              City/Maryland area.{' '}
            </p>
          </>
        }
      />
      <Collapsible
        className="outerCollapsible"
        title="Elder"
        content={
          <>
            <p>Call Adult Protective Services at (410) 361-5000.</p>
          </>
        }
      />
      <Collapsible
        className="outerCollapsible"
        title="Worker/Veteran"
        content={
          <>
            <Collapsible
              title="National Homeless Veterans Hotline"
              content={<p>Hotline: (877) 424-3838</p>}
            />
            <Collapsible
              title="Maryland Employment Law Hotline"
              content={
                <>
                  <p>Phone: (877) 422-9500</p>
                  <p>Tuesdays 9:30a-1:00p</p>
                  <p>
                    Answers questions about employment law issues and offers
                    legal information. They are unable to give legal advice but
                    can refer you to social service or governmental agency for
                    assistance.
                  </p>
                </>
              }
            /> 
          </>
        }
      />
      <Collapsible
        className="outerCollapsible"
        title="Addiction"
        content={
          <>
            <Collapsible
              title="Baltimore Crisis Response "
              content={<p>Hotline: (410) 433-5175</p>}
            />
            <Collapsible
              title="Baltimore Free Alcohol/Drug Abuse Counselor "
              content={<p>Hotline: (800) 780-2294</p>}
            />
          </>
        }
      />*/}
    </>
  );
};

export default Maryland911Alternatives;
