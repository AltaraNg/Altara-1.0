import {post} from './api';

export function log(action, description) {
    action = (action.replace(/([A-Z])/g, ' $1')).replace(/^./, function (str) {
        return str.toUpperCase()
    });
    post('/api/log', {action: action, description: description});
}