import React,{useState}from 'react'
import Card from './Card'

const Inputform = (props) => {

const [title, settitle] = useState("")
const [amount, setamount] = useState("")
const [date, setdate] = useState("")
const [style, setstyle] = useState(true)
const [style2, setstyle2] = useState(true)
const [style3, setstyle3] = useState(true)
const Handletitle=(e)=>{
if(e.target.value.trim().length>0){
    setstyle(true)
}
settitle(e.target.value)
}
const Handledate=(e)=>{
if(e.target.value.trim().length>0){
        setstyle2(true)
    }
    setdate(e.target.value)
}
const Handleamount =(e)=>{
if(e.target.value.trim().length>0){
        setstyle3(true)
    }
    setamount(e.target.value)
}

const Handlesubmit =(e)=>{
    e.preventDefault();
if(title.trim().length===0){
    setstyle(false)
    return ;
}else if(date.trim().length===0){
    setstyle2(false)
    return ;
}else if(amount.trim().length===0){
    setstyle3(false)
    
    return ;
}
    const data={
        title:title,
        amount:"$"+amount,
        date:new Date(date),
        id:Math.random(),
    }
    settitle("");
    setamount("");
    setdate("");
    props.onsave(data);
}
    return (
       <>
       <Card className="bg-info">
       <form onSubmit={Handlesubmit}>
       <div className="mb-3">
       <label for="formGroupExampleInput" class="form-label">Example label</label>
       <input style={{background:style ? "":"red"}} onChange={Handletitle}type="text" value={title} class="form-control" id="formGroupExampleInput" placeholder="Enter Insurance Nominee"></input>
       </div> 
       <div className="mb-3">
       <label for="formGroupExampleInput2" class="form-label">Example label</label>
       <input style={{background:style2 ? "":"red"}}  onChange={Handledate}type="date"  value={date} class="form-control" id="formGroupExampleInput2" placeholder="Enter Date"></input>
       </div> 
       <div className="mb-3">
       <label for="formGroupExampleInput3" class="form-label">Example label</label>
       <input style={{background:style3 ? "":"red"}}  onChange={Handleamount}  value={amount} type="number" class="form-control" id="formGroupExampleInput3" placeholder="Enter Amount"></input>
       </div> 
       <div className="d-flex justify-content-end mx-3">
       <button type="submit" class="btn btn-success btn-lg mx-1  ">Add Expense</button>
       <button onClick={props.closeform}  type="button" class="btn btn-danger btn-lg mx-1">Close Form</button>
       </div>
       </form>
       </Card>
       </>
    )
}

export default Inputform
