import {post} from './api';

export function LogAction(option, details) {

    let description;

    if (option === 'newUser') {

        description = "new employee created. Detail, staff id: " + details.loginID + "";

    }
    post('/api/log', {description: description})

        .then(function (res) {

            console.log(res.data);
        })
}