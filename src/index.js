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

import bootstrapJS from './assets/js/bootstrap'
import bootstrap_selectJS from './assets/js/bootstrap-select'
import themeJS from './assets/js/theme'
import superfishJS from './assets/js/superfish'
import prettyPhoto from './assets/js/jquery.prettyPhoto'
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
