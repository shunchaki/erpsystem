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
  const [ndsItems, setNdsItems] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [pagination, setPagination] = useState({
    CurrentPage: 0,
    TotalPages: 0,
    TotalCount: 0,
    HasPrevious: false,
    HasNext: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiService.fetching(
          `wms/nds/all?Params.PageSize=${rowsPerPage}&Params.PageIndex=${
            pagination.CurrentPage + 1
          }`
        );
        setNdsItems(SelectNds(response.data));
        const p = JSON.parse(response.headers.pagination);
        setPagination({
          ...pagination,
          TotalPages: p.TotalPages,
          TotalCount: p.TotalCount,
          HasPrevious: p.HasPrevious,
          HasNext: p.HasNext,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        console.log("Data fetching completed");
      }
    };
    fetchData();
  }, [pagination.CurrentPage, rowsPerPage]); // page va rowsPerPage o'zgarishi bilan API qayta chaqiriladi
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
    setPagination({ ...pagination, CurrentPage: newPage });
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPagination({ ...pagination, CurrentPage: 0 }); // Sahifani 0 ga qaytarish
  };

  // Har bir sahifada indeksni to'g'ri hisoblash

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
              {ndsItems // Sahifalash uchun qatorlarni kesib olish
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                      sx={{ color: "white" }}
                    >
                      <TableCell align="right">{index + 1}</TableCell>
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
          count={pagination.TotalCount}
          rowsPerPage={rowsPerPage}
          page={pagination.CurrentPage} // Sahifalar 0 dan boshlanadi
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default Nds;