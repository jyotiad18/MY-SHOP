import Api from "../lib/helper/api";

export const GetAll = async (url) => {
    const resp = null;
    await Api.get(url)
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
                return response.json();
            })
            .then(function (response) {
                    resp = response;
            })
        .catch(function (error) {
            console.log(error);
        });
    
    return resp;
}

