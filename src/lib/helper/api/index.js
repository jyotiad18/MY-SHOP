const endPoint = "https://backendapi.turing.com/";

const header = (isTokenUse) => {
   // debugger;
    let h = new Headers();
    h.append("Content-Type", "application/json");
    h.append('Accept','application/json');
    h.append("Access-Control-Allow-Origin", "*");
    h.append("Access-Control-Allow-Credentials", true);
    h.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    if (isTokenUse) {
        const token = sessionStorage.getItem('token');
        h.append("Authorization", `Bearer ${token}`);
    }
    return h;
}

const request = (method, path, body, isTokenUser = false) => {
    const url = `${endPoint}${path}`;
    const options = {
        method, 
        headers: header(isTokenUser)
    };
    if (body) {
        options.body = JSON.stringify(body);
    }

    return fetch(new Request(url, options));
}


const Api = {
    get(path, data = null, isTokenUse = false) { return request('GET', path, data, isTokenUse) },
    post(path, data = {}, isTokenUse = false) { return request('POST', path, data, isTokenUse) },
    delete(path, data = null, isTokenUse = false) { return request('DELETE', path, data, isTokenUse) }
}

export default Api;