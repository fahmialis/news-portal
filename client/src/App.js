import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserPage from './views/UserPage.jsx'
import Home from './views/Home'
import Navbar from './components/Navbar'
import React from 'react';

function App () {
  return(
  <div className="App">
    <header className="App-header">
      {/* <Navbar></Navbar> */}
    </header>
    <body>
    <Home></Home>
    {/* <UserPage></UserPage> */}
    </body>
  </div>
  )
}

export default App;
