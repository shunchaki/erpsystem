import { Box, TextField} from '@mui/material'
import {Routes, Route} from 'react-router-dom'
import {MeasureType, Nds,Main} from '../'
import { useState } from 'react'
import {ModalMeasureType} from '../'

const App = () => {
  const [search, setSearch] = useState("")
  return (
    <Box>
      <>
      <Box sx={{display: 'flex', justifyContent: 'center', padding: '10px 20px'}} >
        <h1 style={{color: 'black', textAlign: 'center'}}>Диспетчер</h1>
      </Box>
      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch'}, display: 'flex', justifyContent: 'right', marginTop: '20px' }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id="outlined-basic" 
        placeholder='Search...'
        variant="outlined"
        size='small'
        onChange={event => setSearch(event.target.value)}
        />
      <ModalMeasureType />
    </Box>
      </>
      <Routes>
        <Route path='/' element= {<Main/>} />
        <Route path='/measure-type' element= {<MeasureType search = {search} />} />
        <Route path='/nds' element= {<Nds/>}/>
      </Routes>
    </Box>
  )
}

export default App