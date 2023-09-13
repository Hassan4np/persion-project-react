
import { useEffect } from "react";
import { useState } from "react";
import Cards from "../Cards/Cards";


const Card = ({hendlecardsitem}) => {
const [Card,setcard]=useState([]);
useEffect(()=>{
    fetch("./data.json")
    .then(res=>res.json())
    .then(data=>setcard(data))
},[])

    return (
        <div className="w-3/3 p-5">
            <h3>All Card</h3>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                Card.map((card,idx)=><Cards key={idx} hendlecardsitem={hendlecardsitem} card={card}></Cards>)
                }
            </div>
        </div>
    );
};

export default Card;