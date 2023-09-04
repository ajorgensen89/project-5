import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>

      <div className="App-header">
        {/* <div>
          <NavBar />
        </div> */}
        <div>
          <Button variant="secondary">Secondary</Button>{' '}

          <Button variant="success">Success</Button>
        </div>
        <div>
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
        </div>
      </div>

    </div>
  );
}

export default App;