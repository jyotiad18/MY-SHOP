export function IsLogIn() {
    return sessionStorage.getItem("username") != null;
}

export function GetUserName() {
    return sessionStorage.getItem("username");;
}

export function LogOut() {
    sessionStorage.clear();
}