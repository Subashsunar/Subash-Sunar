/*
 File: App.js
 Project: React Application
 Created on: 05-21-2025
 Last Modified: 05-21-2025
 Author: Subash Sunar
 Date: 05-21-2025
 Description: This is a main file of the React application. It imports the necessary modules and components.
 */


import './App.css';
import Main from './Main';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>  
  );
}

export default App;
