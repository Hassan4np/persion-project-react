
import { useState } from 'react'
import './App.css'
import Card from './Components/Card/Card'
import Home from './Components/home/Home'

function App() {
const [Cards,setcards]=useState([]);
const [total, setttal] = useState(0);
const[findtk,setfindtk] = useState(0)

const hendlecardsitem=(card)=>{
   const dublectitem=Cards.find(item=>item.id===card.id);
        if(dublectitem){
          return  alert("this is item already add")
        }else{
         let total = card.salary;
         Cards.forEach(item=>{
          total = total + item.salary;
        })
  
        setcards([...Cards,card])
        if(total>20000){
          return alert("Enought Tk")
        }
        setttal(total)
      
        let findtk = 20000- total;    
        setfindtk(findtk)
          
        }
        

}


  return (
    <div className='md:flex max-w-screen-xl mx-auto p-5'>
        <div className=''>
        <Card hendlecardsitem={hendlecardsitem}></Card>
        </div>
       
       <Home Cards={Cards} total={total} findtk={findtk} ></Home>
    </div>
  )
}

export default App
