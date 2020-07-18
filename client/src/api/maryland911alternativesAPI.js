import { handleResponse, handleError } from './apiUtils';
// const baseUrl =
//   'http://localhost:' +
//   (process.env.PORT || 8081) +
//   '/api/maryland911alternatives/';
const baseUrl = 'https://jhu-help.herokuapp.com/api/maryland911alternatives';

export async function getData() {
  console.log(process.env.REACT_APP_API_URL);
  return await fetch(baseUrl).then(handleResponse).catch(handleError);
}
