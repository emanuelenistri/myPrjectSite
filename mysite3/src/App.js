import logo from './logo.svg';
import './App.css';
import firebase from "./firebase";

function App() {
  const ref = firebase.firestore().collection("costi");
  console.log(ref);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <table className="App-table">
            <tr>
              <td>Tipo</td>
              <td>Da Data</td>
              <td>A Data</td>
              <td>Costo</td>
              <td>Mesi</td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </table>
      </header>
    </div>
  );
}

export default App;
