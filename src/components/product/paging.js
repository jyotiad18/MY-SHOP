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
    <div className="col-12 pagination1">
        <a href="#" class="btn"><i class="fa fa-angle-left"></i></a>
        <a href="#" class="btn active">1</a>
        <a href="#" class="btn">2</a>
        <a href="#" class="btn">3</a>
        <a href="#" class="btn">4</a>
        <a href="#" class="btn">5</a>
        <a href="#" class="btn"><i class="fa fa-angle-right"></i></a>
    </div>
);
};

export default Paging;
