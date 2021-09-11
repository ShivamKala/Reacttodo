import React,{useState} from 'react'
import Inputform from './Inputform'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Addexpense from './Addexpense'
import Expense from './Expense'
import Filter from './Filter'
import Card from './Card'
import "./style.css"

const expenses=[
{   
    id:Math.random(),
    title:"Shivam Insurance",
    amount:"$48",
    date:new Date(2020,8,16),

},
{ 
    id:Math.random(),
    title:"Ankit Insurance",
    amount:"$198",
    date:new Date(2021,6,19),
},
{   
    id:Math.random(),
    title:"Pravesh Insurance",
    amount:"$147",
    date:new Date(2019,8,15),

},
{   
    id:Math.random(),
    title:"Pundir Insurance",
    amount:"$192",
    date:new Date(2020,8,26),

},

{   
    id:Math.random(),
    title:"Shobit Insurance",
    amount:"$468",
    date:new Date(2021,6,29),
},
{   
    id:Math.random(),
    title:"kala Insurance",
    amount:"$345",
    date:new Date(2019,6,25),

},
]

const App = () => {
const [change, setchange] = useState(false)
const [add, setadd] = useState(expenses)
const [filteryear, setfilteryear] = useState("2021")

const Changestate=()=>{
    setchange(true)
}

const Formclose=()=>{
    setchange(false)
}


const Addexpenses=(data)=>{
setadd((prev)=>{
    return [...prev,data]
})
}

const Handlefilter=(e)=>{
    setfilteryear(e.target.value)
}

const filterarray =add.filter((val)=>{
    return val.date.getFullYear().toString()=== filteryear
})


const Deleteitems=(id)=>{
    console.log(id)
    setadd((prev)=>{
return prev.filter((val,index)=>{
    return val.id !== id
})
   })
}

    return (
       <>
<div style={{width:"55%",margin:"auto",background:"#CAFFB9"}}className=" p-3 my-5">
    {(change===false) ? <Addexpense openform={Changestate}></Addexpense> :<Inputform onsave = {Addexpenses} closeform={Formclose}></Inputform>} 
    <Filter onchange={Handlefilter} selected={filteryear}></Filter>
    {(filterarray.length===0)? <Card className="bg-info"><p>No Data Found</p></Card> : <Expense onselected={Deleteitems} items={filterarray}></Expense>}
    </div>
       </>
    )
}

export default App
