import {post} from './api';

export function log(action, description) {
    /*actions is the action performed
    * description is reference of the data the action was taken on*/
    action = (action.replace(/([A-Z])/g, ' $1')).replace(/^./, str => str.toUpperCase());
    //formats and capitalize the action performed
    post('/api/log', {action: action, description: description});
    //and logs then on the log table;
}