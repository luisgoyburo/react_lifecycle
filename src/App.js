import logo from './logo.svg';
import './App.css';
// import Clock from "./componentDidMount";
import ClockDidUpadate from "./componentDidUpdate";
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      {/* <Clock /> */}
      <ClockDidUpadate isPrecise="true" />{" "}
      {/* aun asi se ponga false, al tener isPrecise un valor, 
      el return de ClockDidUpdate lo va a tomar como verdadero, ya que existe. si borramos
      esta propiedad, lo tamará como false. */}
    </div>
  );
}

export default App;
