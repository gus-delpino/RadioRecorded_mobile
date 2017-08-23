'use strict';

import API from './local_config';

let ApiUtils = {
    get: (endpoint, params = null) => {
        return new Promise( (resolve, reject) => {
            let params_url = '';
            if (params) {
                for (let param_key in params) {
                    if (params.hasOwnProperty(param_key)) {
                        params_url += (params_url == '') ? '?' : '&';
                        params_url += `${param_key}=${params[param_key]}`;
                    }
                }
            }

            fetch(`${API.host}${endpoint}${params_url}`)
                .then( response => resolve(response) )
                .catch( err => reject(err) )
        });
    },

    parse: (response) => {
        return new Promise( (resolve, reject) => {
            if (response.status >= 200 && response.status < 300) {
                resolve(JSON.parse(response['_bodyText']));
            } else {
                let error = new Error(response.statusText);
                error.response = response;
                reject(error);
            }
        });
    }

};

export default ApiUtils;