
export default function Form({ handleSearch ,query,setQuery }) {
   
  
    return (

        <form onSubmit={handleSearch} id="search-bar">
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
      
    );
  }