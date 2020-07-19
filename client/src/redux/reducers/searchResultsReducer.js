import * as types from '../actions/actionTypes';
import initialState from './initialState';
const collegeHelp = require('../../api/collegehelpsApi');
const diy = require('../../api/diyApi');
const homeschoolingandchildcare = require('../../api/homeschoolingandchildcareApi');
const maryland911alternatives = require('../../api/maryland911alternativesAPI');
const mentalandemotional = require('../../api/mentalandemotionalApi');
const racismhatecrimes = require('../../api/racismhatecrimesApi');
const resourceinsecurities = require('../../api/resourceinsecuritiesApi');
const unstableIncome = require('../../api/unstableIncomeApi');

export default function searchReducer(
  state = initialState.searchResults,
  action
) {
  if (action.type == types.UPDATE_SEARCHTERM_RESULTS_SUCCESS) {
    console.log('search results state is ', state);
    const searchterm = initialState.searchterm;
    console.log(searchterm);
    // Parse data in here
    let data = [];
    collegeHelp.getData().then((retrievedData) => {
      data = retrievedData;
      console.log('got data is ', data);
    });
    console.log('going out');
    return data;
  } else {
    return state;
  }
}
