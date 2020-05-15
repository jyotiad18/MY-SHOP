import React, { useState, useEffect, useContext} from "react";

import { DepartmentContext } from "../../context";
import { CategoryContext } from "../../context";

import Api from "../../lib/helper/api";

const CategoryState = (props) => {
    const  depContext  = useContext(DepartmentContext);
    const { depID } = depContext;
    const [categories, setCategories] = useState([]);
    const [catID, setCatID] = useState();

    useEffect(() => {
      if (depID != undefined) {
        getAll(`categories/inDepartment/${depID}`);
      }
    }, [depID]);
    
    useEffect(() => {
        getAll("categories");
    }, [])

  const setCategoryId = (_id) => {
    setCatID(_id);
   }

  const getAll = async (url) => {

        await Api.get(url)
            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
               return response.json(); 
            })
          .then(function (response) {
                setCategories(response);
                if (depID == undefined) {
                  setCategories(response.rows);
                }
                
            })
            .catch(function (error) {
                console.log(error);
            });
    };
   
  return (
    <CategoryContext.Provider
      value={{
        categories,
        catID,
        setCategoryId,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};
export default CategoryState;
