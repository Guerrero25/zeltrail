import ReactDOM from 'react-dom'
import React, { Component } from 'react'

import css from './style.scss'
import theme from './assets/css/theme.css'
import bootstrap from './assets/css/bootstrap.css'
import bootstrap_theme from './assets/css/bootstrap-theme.css'
import bootstrap_select from './assets/css/bootstrap-select.css'
import animate from './assets/css/animate.css'
import superfish from './assets/css/superfish.css'
import datepicker from './assets/css/bootstrap-datetimepicker.css'
import swiper from './assets/css/swiper.css'

import modernizr from './assets/js/modernizr.custom'
import bootstrapJS from './assets/js/bootstrap.js'
import bootstrap_selectJS from './assets/js/bootstrap-select.js'
import themeJS from './assets/js/theme.js'
import superfishJS from './assets/js/superfish.js'
import prettyPhoto from './assets/js/jquery.prettyPhoto.js'
import moment from './assets/js/moment-with-locales.min.js'
import datepickerJS from './assets/js/bootstrap-datetimepicker.min.js'

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
