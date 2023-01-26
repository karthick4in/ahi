const config = {
    api: 'http://localhost:1101/api',
    options: {
      headers: { 'content-type': 'application/json' },
    },
  };
  import axios from 'axios';
  
  const httpGet = (endpoint,baseUrl) => {
    var urlBase  = baseUrl?baseUrl:config.api;
    return axios.get(`${urlBase}${endpoint}`, {
      ...config.options,
    })
      .then((response) => handleResponse(response))
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        throw Error(error);
      });
  };
  
  const httpPost = (endpoint, data) => {
    return axios.post(`${config.api}${endpoint}`,  
    "data="+JSON.stringify(data)   
    )
      .then((response) => handleResponse(response))
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        throw Error(error);
      });
  };
  
  const httpPut = (endpoint, data) => {
    return fetch(`${config.api}${endpoint}`, {
      method: 'put',
      body: data ? JSON.stringify(data) : null,
      ...config.options,
    })
      .then((response) => handleResponse(response))
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        throw Error(error);
      });
  };
  
  const httpDelete = (endpoint, data) => {
    return fetch(`${config.api}${endpoint}`, {
      method: 'delete',
      ...config.options,
    })
      .then((response) => handleResponse(response))
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        throw Error(error);
      });
  };
  
  const handleResponse = (response) => {
    // You can handle 400 errors as well.
    if (response.status === 200) {
      return response.data;
    } else {
      return response.data;

      // throw Error(response | 'error');
    }
  };
  
  export default { httpGet, httpPost, httpPut, httpDelete };
  