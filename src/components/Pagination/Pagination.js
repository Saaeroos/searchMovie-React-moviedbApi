import React from "react";
import "./Pagination.css";

const Pagination = props => {
  let pageLinks = [];
  for (let i = 1; i <= props.totalPages + 1; i++) {
    const active = props.currentPage === i ? "active" : "";
    pageLinks.push(
      <span onClick={() => props.nextPage(i)} key={i} className={active}>
        {" "}
        &#9679;
      </span>
    );
  }
  return (
    <div className="pagination">
      {props.currentPage > 1 ? (
        <span onClick={() => props.nextPage(props.currentPage - 1)}>Prev</span>
      ) : null}
      {pageLinks}
      {props.currentPage < props.totalPages + 1 ? (
        <span onClick={() => props.nextPage(props.currentPage + 1)}> Next</span>
      ) : null}
    </div>
  );
};

export default Pagination;
