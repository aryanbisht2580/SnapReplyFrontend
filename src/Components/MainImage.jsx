import React from 'react'
import x from"../assets/snap.png"
import y from "../assets/logo.png"
import  style from"./MainImage.module.css"
import DownloadButton from '../Button/DownloadButton'
function MainImage() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingLeft:"1rem",paddingRight:"1rem"}}>
      <div style={{display:"flex",alignItems:"center"}}>
        <img src={y} style={{height:"2rem"}} className={style.container}/>
        <img src={x} className={style.container}/>
      </div>
      <div style={{display:"flex",alignItems:"center"}}>
        <DownloadButton/>
      </div>
    </div>
  )
}

export default MainImage