import Api from "../lib/helper/api";

export const fetchData = async (url, method, data, token) => {
    if (method == 'DELETE')
    {
        await Api.request(url, method, data, token);
    }
    else {
        return await Api.request(url, method, data, token)
            .then((response) => {
                return response.json();
            })
            .then((resp) => {
                return resp;
            });
    }
}

export const methodNum = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}