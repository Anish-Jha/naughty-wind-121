import './App.css';
import Footer from './Homepage/Footer/Footer';
import Home from './Homepage/Home';
import Navbar from './Navbar/Navbar'
import SubNav from './Navbar/SubNav'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <SubNav/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;