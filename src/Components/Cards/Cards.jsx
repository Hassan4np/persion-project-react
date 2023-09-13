

const Cards = ({card,hendlecardsitem}) => {
    // console.log(card)
    const {image,name,role,age,salary
    }=card
    return (
      <div className="">
          <div className="card card-body space-y-2 w-full border bg-slate-500 text-white">
               <div className="flex justify-center">
                   <img className="w-20 rounded-2xl text-center" src={image} alt="" />
               </div>
                <h2 className="text-xl text-center">{name}</h2>
                <h4 className="text-base text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, porro!</h4>
                <div className="flex justify-between px-5">
                    <h4>{salary}</h4>
                    <h4>{}role</h4>
                </div>
                <div className="text-center">
                <button  className="btn btn-primary w-20 text-center" onClick={()=>hendlecardsitem(card)}>Select</button>
                </div>
        </div>
    
      </div>
      );
};

export default Cards;