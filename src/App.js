import React from "react";

import './App.css';

import Table from "./Table.js"

const LOGO_URL = "http://telacadstorageaccount28.blob.core.windows.net/telacad/logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={LOGO_URL} className="App-logo" alt="logo" />
	<Table/>


      </header>
    </div>
  );
}

export default App;
