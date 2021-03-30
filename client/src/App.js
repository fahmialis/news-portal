import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserPage from './views/UserPage.jsx'
import Navbar from './components/Navbar'
import React from 'react';

function App () {
  return(
  <div className="App">
    <header className="App-header">
      <Navbar></Navbar>
    </header>
    <div>
    <UserPage></UserPage>
    </div>
  </div>
  )
}

export default App;
