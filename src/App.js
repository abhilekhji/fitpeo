import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Sidebar from './Components/Sidebar/sidebar';
import Dashboard from './Components/Dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="innerContainer">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
