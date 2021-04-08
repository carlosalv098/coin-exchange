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
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 5,
        price: 56999.99
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 45,
        price: 2006
      },
      {
        name: 'Binance Coin',
        ticker: 'BNB',
        balance: 76,
        price: 385
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        balance: 3000,
        price: 1
      }
    ]
  }

  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map((values) => {
      let newValues = {...values};
      if(valueChangeTicker === newValues.ticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercentage
      }
      return newValues;
    });
    this.setState({ coinData: newCoinData })
  }

  handleBalanceVisibilityChange = () => {
    this.setState( (oldState) => {
      return {
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }

  render() {
    return (
      <Div>
        <ExchangeHeader/>
        <AccountBalance 
          balance={this.state.balance} 
          showBalance={this.state.showBalance} 
          handleBalanceVisibilityChange={this.handleBalanceVisibilityChange}/>
        <CoinList 
          coinData={this.state.coinData} 
          showBalance={this.state.showBalance}
          handleRefresh={this.handleRefresh}/>
      </Div>
    );    
  }
}

export default App;
