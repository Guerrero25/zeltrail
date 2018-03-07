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
// import bootstrapDTP from 'bootstrap-datetimepicker'
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
