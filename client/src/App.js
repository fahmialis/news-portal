import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserPage from './components/UserPage.jsx'
import Navbar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <hr></hr>
      <body>
      <UserPage></UserPage>
      </body>
    </div>
  );
}

export default App;
