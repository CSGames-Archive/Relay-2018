import { fakeFetch } from './fakeFetch';

const request = (urlGetter, options) => {
  console.log('this is a mocked call');
  return fakeFetch(urlGetter, options);
};
export default request;
