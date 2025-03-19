import './App.css';
import Service from './components/service/Service';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
<Navbar />
<Hero />
<Service />
<Footer />


    </div>
  );
}

export default App;
