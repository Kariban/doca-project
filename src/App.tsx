import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from "./Components/Header/Header";
import DocsForm from "./Components/DocsForm/DocsForm";

const App: React.FC = () => {
    return (
            <div className='App-wrapper'>
                <Header/>
                <DocsForm/>
            </div>
    );
}

export default App;
