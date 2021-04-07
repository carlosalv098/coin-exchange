import './App.css';
import logo from './logo.svg';
import Coin from './components/Coin/Coin.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt='React Logo'/>
        <h1 className="App-title">Coin Exchange</h1>
      </header>
      <table className="Coin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
            <th>Refresh</th>
          </tr>
        </thead>
        <tbody>
          <Coin name='Bitcoin' ticker='BTC' price={56999.99}/>
          <Coin name='Ethereum' ticker='ETH' price={2006.55}/>
          <Coin name='Binance Coin' ticker='BNB' price={385.83}/>
          <Coin name='Tether' ticker='USDT' price={1.01}/>
        </tbody>
      </table>
    </div>
  );
}

export default App;
