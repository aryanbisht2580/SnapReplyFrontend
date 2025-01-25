import { useEffect, useState } from 'react'
import MainImage from './Components/MainImage'
import { Button, Input } from '@mui/material'
import InputEmail from './Components/InputEmail'
import SelectTone from './Components/SelectTone'
import GenerateButton from './Button/GenerateButton'
import ResponseBox from './Components/ResponseBox'
import CopyToClipboardBtn from './Button/CopyToClipboardBtn'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import DownloadExtension from './Components/DownloadExtension'
function App() {
  let [content,setContent]=useState();
  let [tone,setTone]=useState("Formal");
  let [loading,setLoading]=useState(false);
  let [response,setResponse]=useState("");
  useEffect(()=>{
    console.log(response);
  },[response])
  return (
    <div style={{backgroundColor:"#fffef3",minHeight:"100vh",width:"100%", overflow:"hidden"}}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
        transition={Zoom}
        />
      <MainImage />
      <div style={{display:"flex",flexDirection:"column", alignItems:"center",width:"100%"}}>
        <InputEmail content={content} setContent={setContent}/>
        <SelectTone tone={tone} setTone={setTone}/>
        <GenerateButton loading={loading} setLoading={setLoading} content={content} tone={tone} setResponse={setResponse}/>
        {response && <ResponseBox response={response} setResponse={setResponse}/>}
        {response &&<CopyToClipboardBtn response={response}/>}
        <DownloadExtension/>
        
      </div>
    </div>
  )
}

export default App
