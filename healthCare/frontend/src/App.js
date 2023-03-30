import './App.css';
import Home from './Homepage/Home';
import Navbar from './Navbar/Navbar'
import SubNav from './Navbar/SubNav'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <SubNav/>
    <Home/>
    </div>
  );
}

export default App;