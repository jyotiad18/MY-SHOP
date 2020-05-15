import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Api from "../../lib/helper/api";
import './category.css';



const Category = () => {
  const [categories, setCategories] = useState([]);
  const { depid, catid, prodid } = useParams();

  useEffect(() => {
    if (depid !== undefined) {
      getAll(`categories/inDepartment/${depid}`);
    }
    if (depid === undefined && catid === undefined)
    {
      getAll(`categories`);
    }
  }, [depid, catid]);


  const getAll = async (url) => {
    await Api.get(url)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(function (response) {
        if (depid != undefined)
        {
          setCategories(response);
        }
        else {
          setCategories(response.rows);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div class="col-12 col-sm-3">
      <div class="card bg-light mb-3">
        <div class="card-header text-white text-uppercase category_header"><i class="fa fa-list"></i> Categories</div>
        <ul class="list-group category_block">
          {categories.length > 0 &&
            categories.map((_cat, index) => (
              <li class="list-group-item" key={index}>
                <Link to={"/category/" + _cat.category_id}>{_cat.name}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>

    );
}
export default Category;