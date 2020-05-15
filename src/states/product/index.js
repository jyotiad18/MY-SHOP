import React, { useState, useEffect, useContext } from "react";

import { DepartmentContext, CategoryContext , ProductContext } from "../../context";
import Api from "../../lib/helper/api";

const ProductState = (props) => {
        const depContext = useContext(DepartmentContext);
        const catContext = useContext(CategoryContext);

        const { depID } = depContext;
        const { catID } = catContext;
        const [products, setProducts] = useState([]);
        const [totalProduct, setTotalProduct] = useState(0);
        const [pages, setPages] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);


        useEffect(() => {
          if (depID !== undefined) {
            getAll(`products/inDepartment/${depID}`);
          }
        }, [depID]);

        useEffect(() => {
          if (catID !== undefined) {
            getAll(`products/inCategory/${catID}`);
          }
        }, [catID]);
        
      useEffect(() => {
        if (currentPage !== undefined)
        {
          getAll(`products?page= ${currentPage}`);
        }  
      },[currentPage]);

        useEffect(() => {
          getAll("products");
        }, []);
  
  const handleCurrentPage = (_page) => {
    setCurrentPage(_page);
    }

  const calculatePage = (_totalProduct) => {
    if (_totalProduct > 0)
    {
      const pageNumber = [];
      const limit = 20;
      const limited = Math.ceil(_totalProduct / limit);
      for (let i = 0; i < limited; i++)
      {
        pageNumber.push(i);
      }
      setPages(pageNumber);
    }
  }

        const getAll = async (url) => {
          await Api.get(url)
            .then(function (response) {
              if (!response.ok) {
                throw Error(response.statusText);
              }
              return response.json();
            })
            .then(function (resp) {
              setTotalProduct(resp.count);
              setProducts(resp.rows);
              calculatePage(resp.count);
            })
            .catch(function (error) {
              console.log(error);
            });
        };

        return (
          <ProductContext.Provider
            value={{
              products,
              totalProduct,
              pages,
              handleCurrentPage
            }}
          >
            {props.children}
          </ProductContext.Provider>
        );
      };;
export default ProductState;
