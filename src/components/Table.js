import React, { Component } from 'react'

export default class Table extends Component {
  handleClick = (e) => {
    console.log("clicked");
  }
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        <table >
          <tbody>
            <tr>
              <th>Stock</th>
              <th>Price</th>
              <th>Change</th>
              <th>Percent Change</th>
            </tr>
            {this.props.stocks.map((stock, i) => {
              return (
                <tr
                  key={i}
                  onClick={this.handleClick}
                >
                  <td>{stock.symbol}</td>
                  <td>{stock.price}</td>
                  <td>{stock.change}</td>
                  <td>{stock.changePercent}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
