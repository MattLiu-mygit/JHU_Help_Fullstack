import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../redux/actions/searchResultsAction';
import Collapsible from '../Collapsible';
import JsxParser from 'react-jsx-parser';
const collegeHelp = require('../../api/collegehelpsApi');
const diy = require('../../api/diyApi');
const homeschoolingandchildcare = require('../../api/homeschoolingandchildcareApi');
const maryland911alternatives = require('../../api/maryland911alternativesAPI');
const mentalandemotional = require('../../api/mentalandemotionalApi');
const racismhatecrimes = require('../../api/racismhatecrimesApi');
const resourceinsecurities = require('../../api/resourceinsecuritiesApi');
const unstableIncome = require('../../api/unstableIncomeApi');

const SearchList = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      generateData();
    }
    find();
  }, [props.searchterm]);

  const find = () => {
    console.log('finding', props.searchterm);
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].main_title.includes(props.searchterm.toLowerCase()) ||
        data[i].main_content.includes(props.searchterm.toLowerCase())
      ) {
        // console.log(data[i].main_content);
        console.log(data[i].main_title);
        setSearchResults([...searchResults, data[i]]);
        console.log(searchResults);
      }
    }
  };

  const generateData = async () => {
    let aggregate = [];
    await collegeHelp.getData().then((out) => {
      aggregate = [...aggregate, ...out];
    });
    await diy.getData().then((out) => {
      aggregate = [...aggregate, ...out];
    });
    await homeschoolingandchildcare.getData().then((out) => {
      aggregate = [...aggregate, ...out];
    });
    await maryland911alternatives.getData().then((out) => {
      aggregate = [...aggregate, ...out];
    });
    await mentalandemotional.getData().then((out) => {
      aggregate = [...aggregate, ...out];
    });
    await racismhatecrimes.getData().then((out) => {
      aggregate = [...aggregate, ...out];
    });
    await resourceinsecurities.getData().then((out) => {
      aggregate = [...aggregate, ...out];
    });
    await unstableIncome.getData().then((out) => {
      aggregate = [...aggregate, ...out];
    });
    setData(aggregate);
  };

  return (
    <div>
      {searchResults.map((_data) => (
        <Collapsible
          title={_data.main_title}
          content={<JsxParser jsx={_data.main_content} />}
        />
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    searchterm: state.searchterm,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // // actions: {
    // //   updateSearchResults: bindActionCreators(
    // //     searchActions.updateSearchResults,
    // //     dispatch
    // //   ),
    // },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
