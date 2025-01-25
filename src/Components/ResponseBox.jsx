

import { Box, TextField } from '@mui/material'
import React from 'react'
import  "./InputEmail.module.css"
function ResponseBox({response,setResponse}) {
  return (
    <div style={{width:"90%",marginTop:"7vh"}}>
      <Box
      sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } ,fontSize: '16px'}}
      
      noValidate
      autoComplete="off"
    >
        <TextField
          required
          value={response}
          onChange={(e)=>setResponse(e.target.value)}
          id="outlined-required"
          label="Response"
          multiline
          rows={10}
          InputLabelProps={{
            style: {  color: '#5e561e' }, 
          }}
          InputProps={{
            style: { fontSize: '1rem' ,fontFamily:"sans-serif"}, 
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#5e561e', 
              },
            },
          }}
          
        />
    </Box>
    </div>
    
  )
}

export default ResponseBox