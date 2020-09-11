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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const changePage = (e, newPage) => {
    setPage(newPage);
  };

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
                <TableCell>Name</TableCell>
                <TableCell align="right">List ID</TableCell>
                <TableCell align="right">ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => (
                <TableRow tabIndex={-1} key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell align="right">{item.listId}</TableCell>
                  <TableCell align="right">{item.id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )
}

export default List
