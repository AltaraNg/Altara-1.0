import axios from 'axios'
import Auth from './auth'

axios.defaults.baseURL = process.env.MIX_APP_URL;
console.log('dddd122', process.env.MIX_APP_URL);
export const get = url => axios({method: 'GET', url, headers: {'Authorization': `Bearer ${Auth.state.api_token}`}});
export const post = (url, data) => axios({
    method: 'POST',
    url,
    data,
    headers: {'Authorization': `Bearer ${Auth.state.api_token}`}
});
export const byMethod = (method, url, data) => axios({
    method,
    url,
    data,
    headers: {'Authorization': `Bearer ${Auth.state.api_token}`}
});
export const postD = (url, data) => axios({
    url,
    data,
    method: 'POST',
    responseType: 'blob',
    headers: {'Authorization': `Bearer ${Auth.state.api_token}`}
});
export const del = url => axios({url, method: 'DELETE', headers: {'Authorization': `Bearer ${Auth.state.api_token}`}});

export const interceptors = cb => axios.interceptors.response.use(res => res, err => {
    cb(err);
    return Promise.reject(err)
});

/*helper functions for easier calls use of
* axios includes the api_token for every
* api call to the backend.*/
