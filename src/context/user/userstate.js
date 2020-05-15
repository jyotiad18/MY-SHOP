import React, { useState } from "react";
import UserContext from "../user/usercontext";

const UserState = (props) => {
  const initalState = false;
  const [loginModal, setLoginModal] = useState(initalState);
  const [registerModal, setRegisterModal] = useState(initalState);
  
   const handleLoginModal = () => {
       setLoginModal(!loginModal);
   }
   const handleRegisterModal = () => {
     setRegisterModal(!registerModal);
   };

  return (
    <UserContext.Provider
      value={{
        loginModal,
        registerModal,
        handleLoginModal,
        handleRegisterModal,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
