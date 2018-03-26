import { authToken } from '../helpers/auth-token';
import { API_VERSION } from '../constants/Login';

import fetchJsonp from 'fetch-jsonp';

//fetchJsonp
//https://cors-anywhere.herokuapp.com/
async function getUserInfo(id) {
    const fields = 'photo_200_orig,city,bdate';
    const request = `https://api.vk.com/method/users.get?user_ids=${id}&fields=${fields}&access_token=${authToken()}&v=${API_VERSION}`;
    let dataResponse = await (await (fetchJsonp(request)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            let data = json.response[0];

            if (data.error) return data.error;

            let userInfo = {
                first_name: data.first_name,
                last_name: data.last_name,
                bdate: data.bdate,
                city: data.city.title,
                photo: data.photo_200_orig
            }
            return userInfo;
        })
        .catch(function (err) {
            return { error: true, err };
        })
    ));
    return dataResponse;
}

export const pageService = {
    getUserInfo
};
