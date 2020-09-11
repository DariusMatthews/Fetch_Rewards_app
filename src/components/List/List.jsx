import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination
} from '@material-ui/core';
import styles from './list.module.scss';

const List = ({ list }) => {
  // state for page and rows per page
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  // function to change page
  const changePage = (e, newPage) => {
    setPage(newPage);
  };
  // function to change rows per page
  const changeRowsPerPage = (e) => {
    const { value } = e.target;
    setRowsPerPage(value);
    setPage(0);
  };

  return (
    <div>
      <Paper>
        <TableContainer className={styles.container}>
          <Table stickyHeader aria-label="data list">
            <TableHead>
              <TableRow>
                <TableCell className={styles.tableHeaderCell}>NAME</TableCell>
                <TableCell className={styles.tableHeaderCell} align="right">LIST ID</TableCell>
                <TableCell className={styles.tableHeaderCell} align="right">ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* display a specified amount of rows per page */}
              {list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => (
                <TableRow className={styles.tableRow} hover tabIndex={-1} key={item.id}>
                  <TableCell className={styles.tableBodyCell}>{item.name}</TableCell>
                  <TableCell className={styles.tableBodyCell} align="right">{item.listId}</TableCell>
                  <TableCell className={styles.tableBodyCell} align="right">{item.id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[50, 75, 100, 150]}
          component="div"
          count={list.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={changePage}
          onChangeRowsPerPage={changeRowsPerPage}
          className={styles.tableHeaderCell}
        />
      </Paper>
    </div>
  )
}

export default List
