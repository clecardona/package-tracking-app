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

 /*  useEffect(() => {
  }, [parcels]); */

  // Constants

  //Methods

  //handle the click :
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
  }

  // Return
  return (
    <main>
      <div className="container-search">
        {/* Search bar */}
        {
          <form onSubmit={onSearch} id="search-bar">
            <input
              id ="search-area"
              type="text"
              placeholder="Enter your name"
              value={query}
              //handle the data: "string" that will be searched by sending him to the state
              onChange={(event) => setQuery(event.target.value)}
            />

            <input id ="search-button" type="submit" value="Search" />
          </form>
        }
      </div>

      {/* Display of parcels */}

      <div className="container-results">

        <div id ="results-title" >
          <p>Parcels available for  ></p>
          <p id="query">  {query} </p>
          </div>


        <ul>
          <li>Number</li>
          <li>Status</li>
          <li>ETA</li>
          <li>Pick up Location</li>
        </ul>

        {<ol>{parcels}</ol>}

        <div id ="results-footer" >-</div>


      </div>
    </main>
  );
}
