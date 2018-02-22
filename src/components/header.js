import React, {Component} from 'react'
import Nav from './nav'

class Header extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <header class="header fixed">
                <div class="header-wrapper">
                    <div class="container">

                        <div class="logo">
                            <a href="index.html"><img src="assets/img/logo-rentit.png" alt="Rent It"/></a>
                        </div>
                            toggle button -->
                        <a href="#" class="menu-toggle btn ripple-effect btn-theme-transparent"><i class="fa fa-bars"></i></a>
                        
                        <Nav />

                    </div>
                </div>

            </header>
            
        )
    }
}

export default Header;