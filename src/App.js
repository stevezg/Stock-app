import React from 'react'
import logo from './logo.svg'
import Form from './components/Form'
import './App.css'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {stocks: []}
  }

  updateStocks = (stockObj) => {
    this.setState({stocks: [...this.state.stocks, stockObj]})
  }
  render(){
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Stock Quote App</p>
          <Form updateStocks={this.updateStocks}/>
          <h2>Stocks</h2>
          <table>
          <tbody>
            <tr><th>Stock</th>
            <th>Price</th>
            <th>Change</th>
            <th>Percent Change</th></tr>

          {this.state.stocks.map((stock, i)=>{
            return (<tr key={i}>
              <td>{stock.symbol}</td>
              <td>{stock.price}</td>
              <td>{stock.change}</td>
              <td>{stock.changePercent}</td>
            </tr>)
            // return <p>Name: {stock.symbol} Price: {stock.price}</p>
          })}
          </tbody>
          </table>
        </header>
      </div>
    )
  }
}

export default App
