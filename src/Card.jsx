import React from 'react'

const Card = (props) => {
const classes="card mx-auto p-2 container "  + props.className
    return (
     <>
      <div className={classes} style={{width: "50rem"}}>{props.children}</div>
     </>
    )
}

export default Card
