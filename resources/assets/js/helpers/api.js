import axios from 'axios'
import Auth from '../store/auth'
export function get(url) {
    return axios({
        method: 'GET',
        url:url,
        headers: {
            'Authorization': `Bearer ${Auth.state.api_token}`
        }
    });
}
export function post(url, payload) {
    return axios({
        method: 'POST',
        url:url,
        data:payload,
        headers: {
            'Authorization': `Bearer ${Auth.state.api_token}`
        }
    });
}
export function postD(url, payload) {
    return axios({
        method: 'POST',
        url:url,
        responseType: 'blob',
        data:payload,
        headers: {
            'Authorization': `Bearer ${Auth.state.api_token}`
        }
    });
}
export function del(url) {
    return axios({
        method: 'DELETE',
        url:url,
        headers: {
            'Authorization': `Bearer ${Auth.state.api_token}`
        }
    });
}

export function interceptors(cb) {
    axios.interceptors.response.use((res) => {
        return res;
    }, (err) => {
        cb(err);
        return Promise.reject(err)
    })
}
/*helper functions for easier calls use of
* axios includes the api_token for every
* api call to the backend.*/