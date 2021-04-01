// NPM packages
import { useEffect, useState } from "react";

// Project files
import MyJSON from "../data/orders.json";
import Parcel from "./Parcel";

export default function ParcelSearch({ id, parcel_id, user_name }) {
  // State
  const [request, setRequest] = useState(0);  
  const [parcels, setParcels] = useState([]);

 
  // Constants
  //  api_url

  //Methods

  //handle the click
  function onSearch(event) {
      
    event.preventDefault();
    // search name into JSON
    const matchedParcels = MyJSON.filter(
      (item) => item.user_name === query
    ).map((item) => (
      <Parcel
        key={item.id}
        user_name={item.user_name}
        parcel_id={item.parcel_id}
        status={item.status}
        eta={item.eta}
        location_name={item.location_name}
      />
    ));
    //change the state by setting the array of results as new state
    setParcels(matchedParcels);
    setRequest(1);
  }

  // Return
  return (
    <div className="container-results">
      
      <ul>
        <li>Number</li>
        <li>Status</li>
        <li>ETA</li>
        <li>Pick up Location</li>
      </ul>

      {<ol>{parcels}</ol>}

      <div id="results-footer">-</div>
    </div>
  );
}
