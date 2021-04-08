import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import React, {useState, useEffect} from 'react';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
  text-align: center;
  background-color: rgb(111, 111, 172);
  color: #cccccc;
`;
const COIN_COUNT = 10;
const formatPrice = price => parseFloat(Number(price).toFixed(3));

function App (props) {

  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    // coinIds is going to be an array of the first 10 coins Ids
    const coinIds = response.data.slice(0, COIN_COUNT).map( coin => coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    // promises is going to be an array of Url + the key of all the Ids in the coinIds array
    const promises = coinIds.map(key => axios.get(tickerUrl + key));
    // Promise.all returns an array of the results 
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map((response) => {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice(coin.quotes['USD'].price),
      };
    })
    setCoinData(coinPriceData);
  }

  useEffect( () => {
    if (coinData.length === 0) {
      componentDidMount();
    }
  })

  const handleRefresh = async (valueChangeId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    const newPrice = formatPrice(response.data.quotes['USD'].price);
    const newCoinData = coinData.map((values) => {
      let newValues = {...values};
      if(valueChangeId === newValues.tickerId) {
        newValues.price = newPrice;
      }
      return newValues;
    });
    setCoinData(newCoinData);
  }

  const handleBalanceVisibilityChange = () => {
    setShowBalance(oldValue => !oldValue);
  }

  return (
    <Div>
      <ExchangeHeader/>
      <AccountBalance 
        balance={balance} 
        showBalance={showBalance} 
        handleBalanceVisibilityChange={handleBalanceVisibilityChange}/>
      <CoinList 
        coinData={coinData} 
        showBalance={showBalance}
        handleRefresh={handleRefresh}/>
    </Div>
  );    

}

export default App;
