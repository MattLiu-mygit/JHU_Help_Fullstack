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
      <div className="jumbotron" style={{ paddingBottom: '0.5rem' }}>
        <h1>Covid-19 Pandemic Resources</h1>
        <p></p>
        <h3>Check out the following resources:</h3>
        <Link
          style={{ margin: '1rem', marginLeft: '0rem' }}
          to="/covid-19/mental-emotional"
          className="btn btn-primary covid-btn"
        >
          Mental and Emotional Resources
        </Link>
        <Link
          style={{ margin: '1rem', marginLeft: '0rem' }}
          to="/covid-19/unstable-income"
          className="btn btn-primary covid-btn"
        >
          Unstable Income
        </Link>
        <Link
          style={{ margin: '1rem', marginLeft: '0rem' }}
          to="/covid-19/resource-insecurity"
          className="btn btn-primary covid-btn"
        >
          Resource Insecurity
        </Link>
        <Link
          style={{ margin: '1rem', marginLeft: '0rem' }}
          to="/covid-19/college-help"
          className="btn btn-primary covid-btn"
        >
          College Help
        </Link>
        <Link
          style={{ margin: '1rem', marginLeft: '0rem' }}
          to="/covid-19/childcare"
          className="btn btn-primary covid-btn"
        >
          Homeschooling and ChildCare
        </Link>
        <Link
          style={{ margin: '1rem', marginLeft: '0rem' }}
          to="/covid-19/report"
          className="btn btn-primary covid-btn"
        >
          Report Racism/Hate Crimes
        </Link>
        <Link
          style={{ margin: '1rem', marginLeft: '0rem' }}
          to="/covid-19/diy-fun"
          className="btn btn-primary covid-btn"
        >
          DIY Projects and Fun
        </Link>
        <Link
          style={{ margin: '1rem', marginLeft: '0rem' }}
          to="/covid-19/your-help"
          className="btn btn-primary covid-btn"
        >
          How <i>you</i> can help!
        </Link>
        <p></p>
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
