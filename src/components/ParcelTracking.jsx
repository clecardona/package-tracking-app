// NPM packages
import { useEffect, useState } from "react";

// Project files
import Parcel from "./Parcel";
import ParcelDisplayer from "./ParcelDisplayer";
import Form from "./Form";

export default function ParcelSearch() {
  // State
  const [status, setStatus] = useState(0);//loading db status
  const [query, setQuery] = useState(""); // the query
  const [currentQueryValue, setCurrentQueryValue] = useState(""); // keep a carbon copy of the query for display purpose and useEffect hook
  const [match, setMatch] = useState(true); // is there any match ? (parcel found)
  const [parcels, setParcels] = useState([]); // array of parcels
  const [data, setData] = useState([]); // result of API fetch

  // Constants
  const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  //Methods
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => onFetchSuccess(json))
      .catch((error) => onFetchFail(error));
      console.log("fetch API");
     
  }, [currentQueryValue]); 

  function handleSearch(event) {
    setCurrentQueryValue(query); 
    event.preventDefault();      
    
    // search user_name into data (JSON object)
    const matchedParcels = data
    .filter((item) => item.user_name === query)
    .map((item) => <Parcel key={item.id} information={item} />);
    setParcels(matchedParcels);
    {matchedParcels.length < 1 ? setMatch(false) : setMatch(true);}
  }
  
  function onFetchSuccess(json) {
    setData(json);
    setStatus(2);
  }

  function onFetchFail(error) {
    console.log("Error", error);
    setStatus(1);
  }

  return (   

  <div>

      {status === 0 && <main>Loading...</main>}
      {status === 1 && <main>Cannot load data . Please check your connection</main>}    
      {status === 2 && <main>  

      <div className="container-search">
        <Form handleSearch={handleSearch} entry={query} setQuery={setQuery} />
      </div>
      
        <ParcelDisplayer
        match={match}
        currentQueryValue={currentQueryValue}
        parcels={parcels}
      />
      </main>

      
      }
      </div>

    
  );
}
