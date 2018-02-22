import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import css from './style.scss'
import theme from './components/vendors/theme.css'

import Header from './components/header'

class App extends Component {
  render() {
    return(
      <div className="wrapper" >
        <Header />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
