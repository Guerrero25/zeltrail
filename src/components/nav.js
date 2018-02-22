import React, {Component} from 'react'

class Nav extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <nav class="navigation closed clearfix">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        
                        <a href="#" class="menu-toggle-close btn"><i class="fa fa-times"></i></a>
                        <ul class="nav sf-menu">
                            <li class="active"><a href="index.html">Home</a>
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
                            <li class="megamenu sale"><a href="#">Features</a>
                                <ul>
                                    <li class="row">
                                        <div class="col-md-3">
                                            <h4 class="block-title"><span>Paragraph</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                            <p>Suspendisse molestie est nec tortor placerat, vel pellentesque metus sollicitudin. Suspendisse congue sem mauris, at ultrices felis blandit non.</p>
                                        </div>
                                        <div class="col-md-3">
                                            <h4 class="block-title"><span>Portfolio</span></h4>
                                            <ul>
                                                <li><a href="portfolio.html">Portfolio 3 Columns</a></li>
                                                <li><a href="portfolio-4col.html">Portfolio 4 Columns</a></li>
                                                <li><a href="portfolio-alt.html">Portfolio Alternate</a></li>
                                                <li><a href="portfolio-single.html">Portfolio Single</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-md-3">
                                            <h4 class="block-title"><span>Pages</span></h4>
                                            <ul>
                                                <li><a href="shortcodes.html">Shortcodes</a></li>
                                                <li><a href="typography.html">Typography</a></li>
                                                <li><a href="coming-soon.html">Coming soon</a></li>
                                                <li><a href="error-page.html">404 Page</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-md-3">
                                            <h4 class="block-title"><span>Pages</span></h4>
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
                                <ul class="social-icons">
                                    <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#" class="instagram"><i class="fa fa-instagram"></i></a></li>
                                    <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="swiper-scrollbar"></div>
            </nav>
        )
    }
}

export default Nav;