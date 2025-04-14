import { Box } from '@mui/material'
import {Routes, Route} from 'react-router-dom'
import {MeasureType, Nds,Main} from '../'

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path='/' element= {<Main/>} />
        <Route path='/measure-type' element= {<MeasureType />} />
        <Route path='/nds' element= {<Nds/>}/>
      </Routes>
    </Box>
  )
}

export default App