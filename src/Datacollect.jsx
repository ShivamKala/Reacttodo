import React from 'react'
import Card from './Card'
import Date from './Date'


const Datacollect = (props) => {

    return (
       <>
  <Card className="bg-info my-2">   
  <div className="d-flex justify-content-between">
 <div style={{width:"65%"}}className="d-flex justify-content-between">    
<div ><Date date={props.date}></Date></div>
<div><h4>{props.title}</h4></div>
<div><h4>{props.amount}</h4></div>
</div>

<svg onClick={()=>{props.onselected(props.id)}} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash custom " width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="7" x2="20" y2="7" />
  <line x1="10" y1="11" x2="10" y2="17" />
  <line x1="14" y1="11" x2="14" y2="17" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg>
</div> 
</Card>   
       </>
    )
}

export default Datacollect
