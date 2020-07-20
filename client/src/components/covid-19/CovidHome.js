import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import SurveyTable from './SurveyTable';
import MentalEmotionalHelp from './MentalEmotionalHelp';
import NotFoundPage from '../NotFoundPage';
import UnstableIncomePage from './UnstableIncomePage';
import ResourceInsecurityPage from './ResourceInsecurityPage';
import CollegeHelpPage from './CollegeHelpPage';
import ChildcarePage from './ChildcarePage';
import DIYPage from './DIYPage';
import ReportPage from './ReportPage';
import YourHelp from './YourHelp';

const CovidHome = () => {
  return (
    <>
      <div className="placeholder"> |</div>
      <div
        className="jumbotron"
        style={{
          marginTop: '6rem',
          paddingBottom: '0.5rem',
          minHeight: '7.5rem',
          paddingTop: '2rem',
        }}
      >
        <h1>Covid-19 Pandemic Resources</h1>
      </div>

      {
        // For Covid route handling
      }
      <Switch>
        <Route path="/covid-19/your-help" component={YourHelp} />
        <Route path="/covid-19/report" component={ReportPage} />
        <Route path="/covid-19/diy-fun" component={DIYPage} />
        <Route path="/covid-19/childcare" component={ChildcarePage} />
        <Route path="/covid-19/college-help" component={CollegeHelpPage} />
        <Route
          path="/covid-19/resource-insecurity"
          component={ResourceInsecurityPage}
        />
        <Route
          path="/covid-19/mental-emotional"
          component={MentalEmotionalHelp}
        />
        <Route
          path="/covid-19/unstable-income"
          component={UnstableIncomePage}
        />
        <Route path="/covid-19" exact component={SurveyTable} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};
export default CovidHome;
