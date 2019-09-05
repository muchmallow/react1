import React from "react";
import classes from "./Paginator.module.css";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    return(
        <div>
            {pages.map((pageNumber) => {
                return (
                    <span className={currentPage === pageNumber && classes.selectedPage}
                          onClick={() => {
                              onPageChanged(pageNumber);
                          }}>
                        {pageNumber}
                    </span>
                );
            })}
        </div>
    );
};

export default Paginator;