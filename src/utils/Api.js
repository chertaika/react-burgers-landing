import {
  METHOD_POST,
  apiSettings,
} from './constants';

class Api {
  constructor({
    baseUrl,
    headers,
    endpoints: { burgersEndpoint, orderEndpoint },
  }) {
    this._address = baseUrl;
    this._headers = headers;
    this._burgersEndpoint = burgersEndpoint;
    this._orderEndpoint = orderEndpoint;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  async _request(endpoint, options) {
    const response = await fetch(`${this._address}${endpoint}`, { headers: this._headers, ...options });
    return this._checkResponse(response);
  }

  getBurgers() {
    return this._request(this._burgersEndpoint);
  }

  sendOrder({ name, order, phone } = null) {
    return this._request(this._orderEndpoint, {
      method: METHOD_POST,
      body: JSON.stringify({
        name,
        order,
        phone,
      }),
    });
  }
}

const api = new Api(apiSettings);
export default api;
