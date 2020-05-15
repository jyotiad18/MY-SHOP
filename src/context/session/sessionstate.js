import React, { useState } from "react";
import SessionContext from "../session/sessioncontext";


const SessionState = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState("");

    const handleLogIn = () => {
      const sessionUser = sessionStorage.getItem("username");
      setIsLogin(sessionUser != null);
      setUsername(sessionUser);
   };

    const handleLogOut = () => {
        sessionStorage.clear();
        setIsLogin(false);
        setUsername("");
     };
  
 
    return (
        <SessionContext.Provider
            value={{
                isLogin,
                username,
                handleLogIn,
                handleLogOut
            }}
        >
            {props.children}
        </SessionContext.Provider>
    );
};
export default SessionState;
