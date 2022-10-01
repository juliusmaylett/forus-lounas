import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Navigation from './Navigation';
import Map from './Map';


function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <header className="App-header">
          <Map />
          <Home />
        </header>
      </div>
    </>
  );
}

export default App;
