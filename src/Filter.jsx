import React from 'react'
import Card from './Card'


const Filter = (props) => {
    return (
      <>
    <Card className="bg-info my-2">
      <select style={{width:"25%"}} onChange={props.onchange} value= {props.selected}  className="form-select form-select-sm" aria-label=".form-select-sm example">
      <option value="2019">2019</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
     </select>
     </Card>
    
   
      </>
    )
}

export default Filter
