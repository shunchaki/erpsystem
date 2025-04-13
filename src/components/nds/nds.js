import {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ApiService } from '../../services/api.service';

const Nds = () => {

  const [ndsItems,setNdsItem]= useState([])
  
      useEffect(()=> {
        ApiService.fetching('wms/nds/all?Params.PageSize=30&Params.PageIndex=1').then(data => setNdsItem())
      },[])
      function createData(name, code, population, size) {
        const density = population / size;
        return { name, code, population, size, density };
      }
      const SelectNds = (data) =>{
        console.log()
      }
      console.log(ndsItems,"nds")
        const [page, setPage] = useState(0);
        const [rowsPerPage, setRowsPerPage] = useState(10);
      
        const handleChangePage = (event, newPage) => {
          setPage(newPage);
        };
      
        const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
        };
    
    return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Название</TableCell>
              <TableCell>Ставка (%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ndsItems
              
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.rate}>
                    <TableCell>{ndsItems.length}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.rate}%</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={ndsItems.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default Nds;