// NPM packages
import { useEffect, useState } from "react";

// Project files
import Parcel from "./Parcel";

export default function ParcelSearch({ id, parcel_id, user_name }) {
  // State
  const [query, setQuery] = useState(""); // the query
  const [currentQueryValue, setCurrentQueryValue] = useState(""); // keep a carbon copy of the query
  const [match, setMatch] = useState(true); // is there any match (parcel found)
  const [parcels, setParcels] = useState([]); // array of parcels
  const [data, setData] = useState([]); // result of API fetch

  // Constants
  const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  //Methods
  function onSearch(event) {
    event.preventDefault();
    // search user_name into JSON data
    const matchedParcels = data
      .filter((item) => item.user_name === query)
      .map((item) => (
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
    setCurrentQueryValue(query);
    {
      matchedParcels.length < 1 ? setMatch(false) : setMatch(true);
    }
  }

   return (
    <main>
      <div className="container-search">

        {/* Search bar */}        {
          <form onSubmit={onSearch} id="search-bar">
            <input
              id="search-area"
              type="text"
              placeholder="Enter user_name"
              value={query}
              //handle the data: "string" that will be searched by sending him to the state
              onChange={(event) => setQuery(event.target.value)}
            />

            <input id="search-button" type="submit" value="Search" />
          </form>
        }
      </div>

      {/* Display of parcels */}
      {match === false && (
        <p id="results-notfound"> No parcel found for {currentQueryValue}</p>
      )}

      {parcels.length > 1 && (
        <div className="container-results">
          <div id="results-title">
            <p>Parcels available for : {currentQueryValue}</p>
          </div>

          <ul>
            <li>Number</li>
            <li>Status</li>
            <li>ETA</li>
            <li>Pick up Location</li>
          </ul>

          {<ol>{parcels}</ol>}

          <div id="results-footer">-</div>
        </div>
      )}
    </main>
  );
}
