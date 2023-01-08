import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import DocsForm from "./Components/DocsForm/DocsForm";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  return (
      <div className='App-wrapper'>
          <Header />
          <DocsForm />
      </div>
  );
}

export default App;
