import axios from 'axios';
import React, { useEffect, useRef } from 'react'

function GenerateButton({loading,setLoading,content,tone,setResponse}) {


    let x=useRef();

    useEffect(()=>{
        let w=(e)=>{
            if(e.key=="Enter"){
                x.current.click();
            }
        }
        window.addEventListener("keydown",w);
        return ()=>{
            window.removeEventListener("keydown",w);
        }
    },[])

    let clickHandler=async()=>{
        if(loading)return;
        setLoading(true);
        try{
            let c=await axios.post("https://snapreply-lb6t.onrender.com/api/generate",{content,"type":tone});
            if(c.status==500){
                return new Error("Try After 1 minute!!!");
            }
            setResponse(c.data);
        }catch(error){
            console.error("error occured");
        }
        setLoading(false);
    }


  return (
    <div style={{width:"80%", marginTop:"2rem"}}>

        <button ref={x} disabled={loading} onClick={clickHandler} style={{cursor:"pointer",fontSize:"1rem", padding:"1rem",borderRadius:"5%",border:"none",color:"White",backgroundColor:"rgb(94,16,38,1)"}}>{loading?"Generating...":"Generate"}</button>
    </div>
  )
}


export default GenerateButton