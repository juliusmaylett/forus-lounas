import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from "./Navigation"
import About from "./pages/About"
import Map from './pages/Map';
import { Route, Routes } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Raffle from './pages/Raffle';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navigation />
      </Navbar>
      <Routes>
        <Route path="/" element={<Raffle />} />
        <Route path="/map" element={<Map />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
