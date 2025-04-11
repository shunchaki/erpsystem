import { Box } from '@mui/material'
import {Routes, Route} from 'react-router-dom'
import {MeasureType} from '../'

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path='/' element= "Main page" />
        <Route path='/measure-type' element= {<MeasureType />} />
      </Routes>
    </Box>
  )
}

export default App