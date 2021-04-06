//NPM packages
import { useTranslation } from "react-i18next";

// Project files
import ResultHeader from "./ResultHeader";

export default function ParcelDisplayer({match,currentQueryValue,parcels}) {
//constants  
const [t] = useTranslation('common');    
  
  return (

    <div className="container-results">

     {/*  no results found */}
      {match === false && (
        <p id="results-notfound">{t("main.nofound")} : {currentQueryValue}</p>
      )}


      {parcels.length > 1 && (
        <div className="container-results">
          <div id="results-title">
            <p>{t("main.found")} : {currentQueryValue}</p>
          </div>

          <ResultHeader />

          {<ol>{parcels}</ol>}
          <div id="results-footer">-</div>
        </div>
      )}
    </div>
  );
}
