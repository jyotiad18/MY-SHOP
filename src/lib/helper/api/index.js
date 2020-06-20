const endPoint = "https://xxx.com/";
  
const header = (isTokenUse) => {
    let header = new Headers();
    header.append("Content-Type", "application/json");    
    header.append("Access-Control-Allow-Origin", "*");
    header.append("Access-Control-Allow-Credentials", true);
    header.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    
    if (isTokenUse) {       
        const token = sessionStorage.getItem('token');        
        header.append("Authorization", token);
    }    
    return header;
}

  const Api = {    
    request : async(path, method, data = null, isTokenUse = false) => {
        const url = `${endPoint}${path}`;
        const options = {
            method,
            headers: await header(isTokenUse)
        };         
        if (data) {
            options.body = JSON.stringify(data);                    
        }
       return fetch(new Request(url, options));
    }
  }

export default Api;