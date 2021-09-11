import React from 'react'
import Card from './Card'

const Addexpense = (props) => {
    return (
       <>
       <Card className="bg-info my-2">
       <div style={{margin:"auto"}}>
       <button  onClick = {props.openform} style={{width:"10rem"}} type="button" class="btn btn-lg btn-success">Add Expense</button>
       </div>
       </Card>
       </>
    )
}

export default Addexpense
