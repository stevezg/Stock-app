import React from 'react'
import logo from './logo.svg'
import Form from './components/Form'
import Table from './components/Table'
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
          <Table stocks={this.state.stocks}/>
        </header>
      </div>
    )
  }
}

export default App
