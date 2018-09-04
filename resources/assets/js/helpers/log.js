import {post} from './api';
export function log(action, description) {
    const actions = ['createdUser', 'updatedUserAccess', 'updatedUserDetails','resetUserPassword'];
    if (actions.includes(action)) {
        action = (action.replace(/([A-Z])/g, ' $1')).replace(/^./, function (str) {
            return str.toUpperCase()
        });
        post('/api/log', {action: action, description: description});
    }
}