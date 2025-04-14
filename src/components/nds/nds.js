import { useEffect, useState } from "react";
import {
  Tooltip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Button,
} from "@mui/material";
import { ApiService } from "../../services/api.service";
import { Link } from "react-router-dom";

const Nds = () => {
  const [ndsItems, setNdsItem] = useState([]);
  const [page, setPage] = useState(1); // Page 0 dan boshlanadi
  const [rowsPerPage, setRowsPerPage] = useState(10); // Dastlabki qatorlar soni 10

  useEffect(() => {
    ApiService.fetching(
      `wms/nds/all?Params.PageSize=${rowsPerPage}&Params.PageIndex=${page}`
    ).then((data) => setNdsItem(SelectNds(data)));
  }, [page, rowsPerPage]); // page va rowsPerPage o'zgarishi bilan API qayta chaqiriladi

  const SelectNds = (data) => {
    const transformed = data.map((item) => {
      return {
        id: item.id,
        name: item.description,
        rate: item.rate,
      };
    });
    return transformed;
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(1);
  };

  let index = 0; // Har bir sahifada indeksni to'g'ri hisoblash

  return (
    <>
      <Link to={"/"}>
        <Button>Back</Button>
      </Link>
      <Paper align="right" sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer align="right" sx={{ maxHeight: 790, maxWidth: "70%" }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            sx={{ background: "lightblue" }}
          >
            <TableHead>
              <TableRow>
                <TableCell align="right" style={{ minWidth: 10 }}>
                  №
                </TableCell>
                <TableCell align="right" style={{ minWidth: 80 }}>
                  Название
                </TableCell>
                <TableCell align="right" style={{ minWidth: 50 }}>
                  Ставка (%)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ndsItems
                //  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // Sahifalash uchun qatorlarni kesib olish
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                      sx={{ color: "white" }}
                    >
                      <TableCell align="right">{++index}</TableCell>
                      <TableCell align="right">
                        <Tooltip title={row.name}>
                          <span>
                            {row.name.length > 50
                              ? `${row.name.slice(0, 50)}...`
                              : row.name}
                          </span>
                        </Tooltip>
                      </TableCell>
                      <TableCell align="right">{row.rate}%</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 30, 100]}
          component="div"
          count={ndsItems.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default Nds;
