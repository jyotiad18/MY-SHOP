import React, { useEffect, useState } from "react"
import { Link, useParams} from 'react-router-dom'
import { fetchData, methodNum } from '../../utils/service.js';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const { depid, catid } = useParams();

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
    var resp = await fetchData(url, methodNum.GET);
    if (depid !== undefined) {
      setCategories(resp);
    } else {
      setCategories(resp.rows);
    }
  }

  return (
    <div className="col-12 col-sm-3">
      <div className="card bg-light mb-3">
        <div className="card-header text-white text-uppercase category_header"><i className="fa fa-list"></i> Categories</div>
        <ul className="list-group category_block">
          {categories.length > 0 &&
            categories.map((_cat, index) => (
              <li className="list-group-item" key={index}>
                <Link to={"/category/" + _cat.category_id}>{_cat.name}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
    );
}
export default Category;