// NPM packages
import { useEffect, useState } from "react";
// Project files
import MyJSON from "../data/orders.json";
import Parcel from "./Parcel";

// Component

export default function ParcelSearch({ id, parcel_id, user_name }) {
  
  // Local state

  const [query, setQuery] = useState("");
  const [parcels, setParcels] = useState([]);



  useEffect( () => {

  },[parcels]
  )

  // Constants


  //Methods

  //handle the click :
   function onSearch(event){  
    event.preventDefault();

   // modifier array parcels 
    const matchedParcels = MyJSON.filter((item)=> item.user_name === query)
    .map( item =>  <Parcel key={item.id} user_name= {item.user_name} parcel_id={item.parcel_id}  /> );
  
    //change the state    

    setParcels(matchedParcels);  

    }   
   
    


// Return
return (
    <main>
      <div className="container">
        {/* Search bar */}
        {
          <form onSubmit={onSearch} className="search-bar">

            <input
              type="text"
              placeholder="Enter your name"
              value={query}
              //handle the data: "string" that will be searched by sending him to the state 
              onChange={ event => setQuery(event.target.value)}  
              
            />

            <input type="submit" value="Search" />
            

          </form>
        }
      </div>

  {/* Display of parcels */}

      <div className="container">        
        <h2>Parcels available for {query} :</h2>
       { <ol>{parcels}</ol> }
      </div>
    </main>
  );
}
