import { Button } from '@mui/material'
import React from 'react'
import x from "../assets/logo.png"
function DownloadButton() {
    const clickHandler=()=>{
        console.log("hello")
        const a=document.createElement('a');
        a.href="/SnapReply.zip"
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
  return (
    <div >
      <Button
        variant="outlined"
        style={{ borderColor: "rgb(94,16,38,1)" }}  
        sx={{
          color: "rgb(94,16,38,1)", 
          '&:hover': {
            backgroundColor: '#f2f0dc',
          }
        }}
        onClick={clickHandler}
        
      >
        Get Extension 
        <img src={x} style={{height:"1rem",margin:"5px"}} />
        
      </Button>
    </div>
  )
}
export default DownloadButton





