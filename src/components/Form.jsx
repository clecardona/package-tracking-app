//NPM packages
import { useTranslation } from "react-i18next";

export default function Form({ handleSearch ,entry,setQuery }) {

  //constants  
const [t] = useTranslation('common');   
  
    return (

        <form onSubmit={handleSearch} id="search-bar">
        <input
          id="search-area"
          type="text"
          placeholder={t("main.form-placeholder")}
          value={entry}
          //handle the data: "string" that will be searched by sending him to the state
          onChange={(event) => setQuery(event.target.value)}
        />

        <input id="search-button" type="submit" value={t("main.form-submit-value")} />
      </form>
      
    );
  }