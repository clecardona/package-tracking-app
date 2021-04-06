//NPM packages
import React, {Suspense} from 'react';

// Project files
import Home from "./pages/Home";
import "./styles/base.css";

export default function App() {
   

  return (
    <Suspense fallback="loading">
    <div className="App">
      <Home/>     
    </div>
    </Suspense>
  );
}
