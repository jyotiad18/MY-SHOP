import React, { useState, useEffect } from 'react';

import { DepartmentContext } from "../../context";
import Api from "../../lib/helper/api"


const DepartmentState = (props) => {
    const url = "departments";
    const [departments, setDeparments] = useState([]);
    const [depID, setDepID] = useState();
  
    useEffect(() => {
        getAll();
    }, []);
  
  const setDepartmentsId = (_id) => {
    setDepID(_id);
  }

    const getAll = async () => {
        await Api.get(url)
          .then(function (response) {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response.json();
          })
          .then(function (response) {
            setDeparments(response);
          })
          .catch(function (error) {
            console.log(error);
        });
    }

    return (
      <DepartmentContext.Provider
        value={{
          departments,
          depID,
          getAll,
          setDepartmentsId,
        }}
      >
        {props.children}
      </DepartmentContext.Provider>
    );
};
export default DepartmentState;
