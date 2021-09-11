import React from 'react'

const Date = (props) => {
const month= props.date.toLocaleString('en-us',{month:'long'});
const day=props.date.toLocaleString('en-us',{day:'2-digit'});
const year=props.date.getFullYear();
    return (
      <>
   <h4  className="d-inline mx-1">{month}</h4>
   <h4  className="d-inline  mx-1">{day}</h4>
   <h4  className="d-inline  mx-1">{year}</h4>
      </>
    )
}

export default Date
