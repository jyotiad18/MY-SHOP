import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { DepartmentContext } from "../../../context";

const Department = () => {
  const departmentContext = useContext(DepartmentContext)
  const { departments, setDepartmentsId} = departmentContext;

  const handleOnLink = (e) => {
    e.preventDefault();
    setDepartmentsId(e.target.id);
  };
 
  return (
    <ul className="navbar-nav navbar-center">
      {departments.length > 0 &&
        departments.map((department, index) => (
          <li className="nav-item" key={index}>
            <Link className="nav-link" to={"/department/" +  department.department_id}>{department.name}</Link>
            {/* <a
              className="nav-link"
              id={department.department_id}
              onClick={handleOnLink}
            >
            {department.name}
            </a>
            */
          }
          </li>
        ))}
    </ul>
  );
};

export default Department;