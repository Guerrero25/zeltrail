import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

import './loader'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-select/dist/css/bootstrap-select.css'
import 'bootstrap-select/dist/js/bootstrap-select.js'
import 'swiper/dist/css/swiper.css'
import 'swiper/dist/js/swiper.js'
import 'bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js'
import './assets/css/prettyPhoto.css'
import './assets/css/owl.carousel.css'
import './assets/css/owl.theme.default.css'
import './assets/css/animate.css'
import './assets/css/superfish.css'
import './assets/css/theme.css'
import './style.scss'

import './assets/js/modernizr.custom.js'

import Header from './components/header'
import Home from './components/home'

class App extends Component {
  render() {
    return(
      <Router>
        <div className="wrapper" >
          <Header />

          <Route exact path='/' component={Home} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
