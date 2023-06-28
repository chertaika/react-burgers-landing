const apiSettings = {
  baseUrl: 'https://testologia.site/',
  headers: {
    'Content-Type': 'application/json',
  },
  endpoints: {
    burgersEndpoint: '/burgers-data?extra=black',
    orderEndpoint: '/burgers-order',
  },
};

const authSettings = {
  baseUrl: 'https://auth.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  },
  endpoints: {
    regEndpoint: '/signup',
    authEndpoint: '/signin',
    tokenEndpoint: '/users/me',
  },
};
const METHOD_PATCH = 'PATCH';
const METHOD_POST = 'POST';
const METHOD_DELETE = 'DELETE';
const METHOD_PUT = 'PUT';

export {
  apiSettings, authSettings, METHOD_PATCH, METHOD_POST, METHOD_DELETE, METHOD_PUT,
};
