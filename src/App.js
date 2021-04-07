import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import React from 'react';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color: rgb(111, 111, 172);
  color: #cccccc;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 56999.99
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 2006
        },
        {
          name: 'Binance Coin',
          ticker: 'BNB',
          price: 385
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1
        }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  handleRefresh (valueChangeTicker) {
    const newCoinData = this.state.coinData.map(({name, ticker, price}) => {
      let newPrice = price;
      if(valueChangeTicker === ticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage
      }
      return {
        name,
        ticker,
        price: newPrice
      }
    });
   this.setState({coinData: newCoinData})
  }
  render() {
    return (
      <Div>
        <ExchangeHeader/>
        <AccountBalance balance={this.state.balance}/>
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh}/>
      </Div>
    );    
  }
  

}

export default App;
