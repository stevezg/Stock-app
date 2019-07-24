import React from 'react'
import logo from './logo.svg'
import './App.css'

// async function getStockAsync(name) {
//   let response = await fetch(url)
//   let data = await response.json()
//   return data
// }
// getStockAsync.then(data => console.log(data))
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Stock Quote App</p>
        <input placeholder='Enter Stock' />
        <button style={{ width: '100px' }}>Add New Stock</button>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h2>Stocks</h2>

        <table>
          <tr>
            <th>Company</th>
            <th>Price</th>
            <th>Volume</th>
          </tr>
          <tr>
            <td>company1.name</td>
            <td>compnay1.price</td>
            <td>company1.volume</td>
          </tr>

        </table>
      </header>
    </div>
  )
}

export default App
