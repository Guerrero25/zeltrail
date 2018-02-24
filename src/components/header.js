import React, {Component} from 'react'
import Nav from './nav'

import logo from '../assets/img/logo-rentit.png'

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
                            <a href="index.html"><img src={logo} alt="Rent It"/></a>
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