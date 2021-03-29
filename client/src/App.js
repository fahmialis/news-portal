import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserCard from './components/UserCard.jsx'
import Navbar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      <div className="container-fluid row justify-content-center">
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
      </div>
      </header>
    </div>
  );
}

export default App;
