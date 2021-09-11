import React from 'react'
import Lists from './Lists'

const Expense = (props) => {
  
    return (
      <>
      <Lists onselected={props.onselected} items={props.items}></Lists>
      </>
    )
}

export default Expense
