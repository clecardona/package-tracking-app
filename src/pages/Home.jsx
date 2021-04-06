// NPM packages
import { useEffect } from "react";

// Project files

import Header from "../components/Header";
import ParcelTracking from "../components/ParcelTracking";


export default function Home() {
    // Methods
    useEffect(() => {
      document.title = "Parcel Tracking";
    }, []);
  
    return (
      <div >
        <Header />
        <ParcelTracking />
      </div>
    );
}
