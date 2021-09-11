import React from 'react'
import DataCollect from './Datacollect'

const Lists = (props) => {

    return (
       <>
     {props.items.map((val,index)=>{
         return <DataCollect title={val.title} amount={val.amount} date={val.date} id={val.id} key={index} onselected={props.onselected}></DataCollect>
     })}
       </>
    )
}

export default Lists
