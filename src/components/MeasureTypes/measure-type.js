import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TablePagination,
  Button
} from "@mui/material"
import { ApiService } from "../../services/api.service";

const MeasureType = () => {
  const [typeItem, setTypeItem] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [totalCount, setTotalCount] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log(event.target.value)
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiService.fetching(`wms/measure-type/all?Params.PageSize=${rowsPerPage}&Params.PageIndex=${page+1}`)
        setTypeItem(response.data)
        const pagination = JSON.parse(response.headers.pagination);
        setTotalCount(pagination.TotalCount);
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        console.log("Data fetching completed")
      }
    }
    fetchData()
  }, [page, rowsPerPage])

  return (
    <>
    <Link to={"/"}>
        <Button>Back</Button>
    </Link>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
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
             <TableRow
               key={item.id}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
               <TableCell component="th" scope="row">
                 {index + 1}
               </TableCell>
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
  )
}

export default MeasureType