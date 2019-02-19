import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageChange, currentPage, lastPage }) => (
  <ReactPaginate
    previousLabel="<"
    nextLabel=">"
    breakLabel={<a>...</a>}
    forcePage={+currentPage - 1}
    onPageChange={pageChange}
    pageCount={lastPage}
    marginPagesDisplayed={1}
    pageRangeDisplayed={3}
    containerClassName="pagination"
    activeClassName="active"
  />
);

export default Pagination;
