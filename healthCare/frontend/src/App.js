import './App.css';
import Home from './Homepage/Home';
import Navbar from './Navbar/Navbar'
import SubNav from './Navbar/SubNav'
import MainRoutes from './Routes/MainRoutes';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <SubNav/>
    <MainRoutes/>
    <Home/>
    </div>
  );
}

export default App;