import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <h1 className="text-3xl font-bold underline text-amber-500">
          Hello world!
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
