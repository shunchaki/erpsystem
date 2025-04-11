import { Container, TableContainer, Table, TableHead, TableRow, TableCell, TableBody,  } from '@mui/material'

const MeasureType = () => {
  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }
  const rows = [
    createData(5, 'Kilogram', 'kg', 24),
    createData(4, 'Metr', 'm', 37),
    createData(3, 'Gradus', 'C', 24),
    createData(2, 'Litr', 'l', 67),
    createData(1, 'Dona', 'ta', 49),
  ];
  return (
    <Container>
      <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell align="right">Полное название</TableCell>
            <TableCell align="right">Короткое название</TableCell>
            <TableCell align="right">Код</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </Container>
  )
}

export default MeasureType