import React from "react";
import Pagination from "react-bootstrap/Pagination";
const pagination = ({ PreviousBtn, NextBtn, page, pageCount, setPage }) => {
  // --------------------------------------------

  // --------------------------------------------

  return (
    <>
      {pageCount > 0 ? (
        <Pagination className="d-flex justify-content-end gap-1 mx-5">
          <Pagination.Prev onClick={() => PreviousBtn()} />
          {Array(pageCount)
            .fill(null)
            .map((element, index) => (
              <Pagination.Item
                key={index}
                active={page === index + 1 ? true : false}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          <Pagination.Next onClick={() => NextBtn()} />
        </Pagination>
      ) : (
        ""
      )}
    </>
  );
};

export default pagination;
