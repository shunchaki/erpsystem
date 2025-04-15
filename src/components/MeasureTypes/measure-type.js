import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField
} from "@mui/material";
import { ApiService } from "../../services/api.service";
import { ModalMeasureType } from "../";

const MeasureType = () => {
  const [typeItem, setTypeItem] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");

  const handleChangePage = (_, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const fetchData = useCallback(async () => {
    try {
      const searchQuery = search ? `&Search=${encodeURIComponent(search)}` : "";
      const response = await ApiService.fetching(
        `wms/measure-type/all?Params.PageSize=${rowsPerPage}&Params.PageIndex=${page + 1}${searchQuery}`
      );
      setTypeItem(response.data);
      const pagination = JSON.parse(response.headers.pagination);
      setTotalCount(pagination.TotalCount);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [page, rowsPerPage, search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
        <h1 style={{ color: "black", textAlign: "center" }}>Диспетчер</h1>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 2,
          px: 3,
          mb: 2
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <ModalMeasureType search={search} onSuccess={fetchData} />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-start", px: 3, mb: 2 }}>
        <Link to="/">
          <Button variant="outlined">Back</Button>
        </Link>
      </Box>

      <Paper sx={{ width: "90%", mx: "auto" }}>
        <TableContainer sx={{ maxHeight: 640 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>№</TableCell>
                <TableCell align="right">Полное название</TableCell>
                <TableCell align="right">Короткое название</TableCell>
                <TableCell align="right">Код</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {typeItem.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell align="right">{item.fullTitle}</TableCell>
                  <TableCell align="right">{item.shortTitle}</TableCell>
                  <TableCell align="right">{item.digitalCode}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={totalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default MeasureType