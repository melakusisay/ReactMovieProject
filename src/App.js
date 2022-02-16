import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Carousel from './Components/Carousel';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Mytest from './Components/Mytest';
import UpcomingMovis from './Components/UpcomingMovis';
function App() {
  return (
    <div>
      <Admin />
      <Login />
      <Navbar />
      <Carousel />
      <Mytest/>
      <UpcomingMovis/>
    </div>
  );
}

export default App;
