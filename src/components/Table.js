import React, { Component } from 'react'

export default class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moreInfo: false,
      key: 0
    }
  }

  moreInfo = () => {
    if (this.state.moreInfo) {
      return <p>{this.props.stocks[this.state.key].volume}</p>
    }
  }
  handleClick = i => {
    this.setState({ key: i, moreInfo: true })
  }

  handleToggle = () => {
    this.setState({
      moreInfo: !this.state.moreInfo
    })
  }
  render() {
    return (
      <div className='container'>
        <div>
          <h2>Stocks</h2>
          <table className="table"  >
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
                    data-index={i}
                    onClick={() => this.handleClick(i)}
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
        <div>
          {this.state.moreInfo && (
            <div>
              <div style={{ display: 'inline-flex' }}>
                <h3>More Info</h3>
                <button className='toggleBtn' onClick={this.handleToggle}>
                  Collapse
                </button>
              </div>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  Volume:
                  <span className='bold'>
                    {this.props.stocks[this.state.key].volume}
                  </span>
                </li>
                <li>
                  Open:
                  <span className='bold'>
                    {this.props.stocks[this.state.key].open}
                  </span>
                </li>
                <li>
                  High:
                  <span className='bold'>
                    {this.props.stocks[this.state.key].high}
                  </span>
                </li>
                <li>
                  Low:
                  <span className='bold'>
                    {this.props.stocks[this.state.key].low}
                  </span>
                </li>
                <li>
                  previousClose:
                  <span className='bold'>
                    {this.props.stocks[this.state.key].previousClose}
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}
