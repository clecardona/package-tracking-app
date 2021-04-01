import { useEffect} from "react";

import './styles/base.css';
import Header from './components/Header'
import ParcelSearch from './components/ParcelSearch'


export default function App() {

  // Methods 
  useEffect(() => {
    document.title = "Parcel Tracking"
 }, []);

  return (
      <div className="App">
       
     < Header />
     <ParcelSearch />
     
    </div>
  );
}


