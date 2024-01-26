import React ,{useState}from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
function App() {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[data,setData]=useState([]);
  function add(){
    setData([...data,{
      name,email
    }]);
    setName("")
    setEmail("")
  }
  return (
    <div>
      <h1 className='design'>Record Keeping</h1>
      <div className='fields'>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
        
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}/>
      <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
      
    </Box>
    <div className='h'>
    <Button variant="contained" color="success" size='large'>
    <AddIcon />
    </Button>
    </div>
    </div>  
    
    </div>
  
  )
}
export default App