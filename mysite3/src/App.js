import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <table className="App-table">
            <tr>
              <td>Tipo</td>
              <td>Da Data</td>
              <td>A Data</td>
              <td>Costo</td>
              <td>Mesi</td>
            </tr>
          </table>
        </p>
      </header>
    </div>
  );
}

export default App;
