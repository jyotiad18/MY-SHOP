import React, { useState, useEffect } from 'react';
import { DepartmentContext } from "../../context";
import { fetchData, methodNum } from '../../utils/service.js';


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
    var resp = await fetchData(url, methodNum.GET);
    setDeparments(resp);    
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
