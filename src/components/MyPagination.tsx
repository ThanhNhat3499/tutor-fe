import React, { FC } from 'react';
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const MyPagination: FC = () => {
  return (
    <>
      <nav aria-label="Page navigation example">
        <Pagination
          className="pagination justify-content-end"
          listClassName="justify-content-end"
        >
          <PaginationItem className="disabled">
            <PaginationLink
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fa fa-angle-left" />
              <span className="sr-only">Previous</span>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="active">
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              <i className="fa fa-angle-right" />
              <span className="sr-only">Next</span>
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </nav>
    </>
  );
}

export default MyPagination;