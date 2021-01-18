import React, { useState } from 'react';
import { Table as ReactTable } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import classes from './Table.module.css';

const Table = ({ tableSettings, tableHeaders, tableData, results, clicked }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPageResults = 13;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Display only required items per page
  const lastIndex = currentPage * perPageResults;
  const firstIndex = lastIndex - perPageResults;

  const dataToShow = tableData.slice(firstIndex, lastIndex);

  const headers = tableHeaders.map((header) => {
    return <th key={header}>{header}</th>;
  });
  const data = dataToShow.map((dataItem) => {
    let dataItemFields = Object.keys(dataItem).map((field, index) => {
      return <td key={index}>{dataItem[field]}</td>;
    });

    return (
      <tr key={dataItem.id} onClick={() => clicked(dataItem.id)} className={classes.TableRow}>
        {dataItemFields}
      </tr>
    );
  });

  return (
    <>
      <ReactTable {...tableSettings}>
        <thead>
          <tr>{headers}</tr>
        </thead>

        <tbody>{data}</tbody>
      </ReactTable>

      <div className={classes.PaginationContainer}>
        <Pagination
          innerClass={classes.Pagination}
          activeClass={classes.Active}
          activeLinkClass={classes.ActiveLink}
          activePage={currentPage}
          itemsCountPerPage={perPageResults}
          totalItemsCount={results}
          pageRangeDisplayed={10}
          prevPageText="←"
          nextPageText="→"
          hideFirstLastPages
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Table;
