import React, {Component} from 'react'

class Nav extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <nav className="navigation closed clearfix swiper-container-vertical swiper-container-free-mode">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <a href="#" className="menu-toggle-close btn"><i className="fa fa-times"></i></a>
                        <ul className="nav sf-menu nav sf-menu sf-js-enabled sf-arrows">
                            <li className="active"><a href="index.html">Home</a>
                                <ul>
                                    <li><a href="index.html">Home 1</a></li>
                                    <li><a href="index-2.html">Home 2</a></li>
                                    <li><a href="index-3.html">Home 3</a></li>
                                    <li><a href="index-4.html">Home 4</a></li>
                                    <li><a href="index-5.html">Home 5</a></li>
                                    <li><a href="index-6.html">Home 6</a></li>
                                </ul>
                            </li>
                            <li><a href="car-listing.html">Hot Deals</a></li>
                            <li><a href="car-listing.html">Vehicles</a></li>
                            <li><a href="faqs.html">FAQS</a></li>
                            <li className="megamenu sale"><a href="#">Features</a>
                                <ul>
                                    <li className="row">
                                        <div className="col-md-3">
                                            <h4 className="block-title"><span>Paragraph</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                            <p>Suspendisse molestie est nec tortor placerat, vel pellentesque metus sollicitudin. Suspendisse congue sem mauris, at ultrices felis blandit non.</p>
                                        </div>
                                        <div className="col-md-3">
                                            <h4 className="block-title"><span>Portfolio</span></h4>
                                            <ul>
                                                <li><a href="portfolio.html">Portfolio 3 Columns</a></li>
                                                <li><a href="portfolio-4col.html">Portfolio 4 Columns</a></li>
                                                <li><a href="portfolio-alt.html">Portfolio Alternate</a></li>
                                                <li><a href="portfolio-single.html">Portfolio Single</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <h4 className="block-title"><span>Pages</span></h4>
                                            <ul>
                                                <li><a href="shortcodes.html">Shortcodes</a></li>
                                                <li><a href="typography.html">Typography</a></li>
                                                <li><a href="coming-soon.html">Coming soon</a></li>
                                                <li><a href="error-page.html">404 Page</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <h4 className="block-title"><span>Pages</span></h4>
                                            <ul>
                                                <li><a href="car-listing.html">Car Listing</a></li>
                                                <li><a href="booking.html">Booking & Payment</a></li>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="login.html">Login</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="blog.html">Blog</a>
                                <ul>
                                    <li><a href="blog.html">Blog Sidebar Left </a></li>
                                    <li><a href="blog-right.html">Blog Sidebar Right</a></li>
                                    <li><a href="blog-post.html">Blog Single Post</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                            <li>
                                <ul className="social-icons">
                                    <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="swiper-scrollbar"></div>
            </nav>
        )
    }
}

export default Nav;