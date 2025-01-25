import { Button } from '@mui/material';
import React from 'react';
import { toast } from 'react-toastify';

function CopyToClipboardBtn({ response }) {  
  let handleClick=()=>{
    
    navigator.clipboard.writeText(response);
    toast.success("Copied to Clipboard!!!");
  }
  return (
    <div style={{ width: "88%", marginBottom: "3rem", marginTop: "1rem" }}>
      <Button
        variant="outlined"
        style={{ borderColor: "rgb(94,16,38,1)" }}  
        sx={{
          color: "rgb(94,16,38,1)", 
          '&:hover': {
            backgroundColor: 'rgb(94,16,38,1)',
            color: 'white'  
          }
        }}
        onClick={handleClick}
      >
        Copy To Clipboard
      </Button>
    </div>
  );
}

export default CopyToClipboardBtn;
