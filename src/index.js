import ReactDOM from 'react-dom'
import React, { Component } from 'react'

import $ from 'jquery';

import './assets/css/prettyPhoto.css'
import './assets/css/owl.carousel.css'
import './assets/css/owl.theme.default.css'
import './assets/css/animate.css'
import './assets/css/superfish.css'
import './assets/css/theme.css'
import './style.scss'

import Header from './components/header'

class App extends Component {
  render() {
    console.log($)
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
