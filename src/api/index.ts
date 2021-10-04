import axios from 'axios';
import router from '../router';

const DOMAIN = 'http://localhost:3000';
const UNATHURIZED = 401;
const onUNATHURIZED = () => {
    router.push('/login');
};

const request = (method:any, url:string, data?:string) => {
    return axios({
        method,
        url: DOMAIN + url,
        data,
    })
        .then(result => result.data)
        .catch(result => {
            const { status } = result.response;
            if(status === UNATHURIZED) {
                return onUNATHURIZED();
            }
            throw Error(result);
        });
};

export const board = {
    fetch() {
        return request('get', '/boards');
    },
};
