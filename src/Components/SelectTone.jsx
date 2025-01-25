import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

function SelectTone({tone,setTone}) {
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", marginTop: "2rem" }}>
      <FormControl style={{ width: "80%" }}>
        <InputLabel id="demo-simple-select-label">Tone</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tone}
          label="Tone"
          onChange={(e)=>setTone(e.target.value)}
          
        >
          <MenuItem value={"Formal"}>Formal</MenuItem>
          <MenuItem value={"Casual"}>Casual</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectTone
