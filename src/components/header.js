import React, {Component} from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import Nav from './nav'

import logo from '../assets/img/logo-rentit.png'

import '../assets/js/theme.js'
import '../assets/js/superfish.js'
import '../assets/js/jquery.prettyPhoto.js'
import '../assets/js/moment-with-locales.js'
import '../assets/js/momentjs.js'

class Header extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <header className="header fixed">
                <div className="header-wrapper">
                    <div className="container">

                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="Rent It"/>
                            </Link>
                        </div>
                        
                        <a href="#" className="menu-toggle btn ripple-effect btn-theme-transparent"><i className="fa fa-bars"></i></a>
                        
                        <Nav />

                    </div>
                </div>

            </header>
            
        )
    }
}

export default Header;