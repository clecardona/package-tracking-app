// Project files
import ResultHeader from "./ResultHeader";

export default function ParcelDisplayer({match,currentQueryValue,parcels}) {
  return (

    <div className="container-results">

     {/*  no results found */}
      {match === false && (
        <p id="results-notfound"> No parcel found for {currentQueryValue}</p>
      )}


      {parcels.length > 1 && (
        <div className="container-results">
          <div id="results-title">
            <p>Parcels available for : {currentQueryValue}</p>
          </div>

          <ResultHeader />

          {<ol>{parcels}</ol>}

          <div id="results-footer">-</div>
        </div>
      )}
    </div>
  );
}
