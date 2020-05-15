import React, { useState } from "react"

const Paging = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    
    const handleNext = (e) => {
        e.preventDefault();
        if (currentPage < props.pages.length)
        {
            setCurrentPage(currentPage + 1);    
        }
    }
    const handlePrevious = (e) => {
        e.preventDefault()
        if (currentPage > 1)
        {
            setCurrentPage(currentPage - 1);
        }
    }
    const handlePage = (e) => {
        e.preventDefault();
    } 
return (
    <nav aria-label="Page navigation example">
        <ul className="pagination">
            <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous" onClick={handlePrevious}>
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                </a>
            </li>
            {
                props.pages.map((page, i) =>
                (
                        <li className="page-item" key={i}><a className="page-link" href="#" key={i} id={page + 1} onClick={handlePage}>{page + 1}</a></li>
                ))
            }
            <li className="page-item">
                <a className="page-link" href="#" aria-label="Next" onClick={handleNext}>
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </nav>
);
};

export default Paging;
