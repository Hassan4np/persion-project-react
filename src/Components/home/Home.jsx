

const Home = ({Cards,total,findtk}) => {
    return (
        <div className="w-1/4 lg:mt-10 bg-gray-300 p-5 rounded-lg ">
            <h3>All Actor: </h3>
            <h3>Total Cost: {total}</h3>
            <h3>Baki tk ase: {findtk}</h3>
            <div>
              {
                Cards.map((item,idx)=><h5 key={idx}>{item.name}</h5>)
              }
            </div>
        </div>
    );
};

export default Home;