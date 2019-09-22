import React, {useState} from "react";
import classes from "./Paginator.module.css";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 15}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionsCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return(
        <div className={classes.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
                return (
                    <span className={currentPage === p && classes.selectedPage}
                          key={p}
                          onClick={() => onPageChanged(p)}>
                        {p}
                    </span>
                );
            })}

            {portionsCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </div>
    );
};

export default Paginator;