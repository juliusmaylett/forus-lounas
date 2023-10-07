import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from "./components/Navigation"
import Map from './pages/Map';
import { Route, Routes } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Raffle from './pages/Raffle';
import About from './pages/About';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navigation />
      </Navbar>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/raffle" element={<Raffle />} />
        <Route path="/map" element={<Map />} />
        
      </Routes>
    </>
  );
}

export default App;