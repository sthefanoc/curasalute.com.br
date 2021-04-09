import React, { Component } from 'react';
import { Link } from 'gatsby';
// import footerLogo from '../assets/images/footer-logo.png';
import footerLogo from '../assets/images/cura-salute-cores.png';

import gallery01 from '../assets/images/gallery/gallery-1.jpg';
import gallery02 from '../assets/images/gallery/gallery-2.jpg';
import gallery03 from '../assets/images/gallery/gallery-3.jpg';
import gallery04 from '../assets/images/gallery/gallery-4.jpg';
import gallery05 from '../assets/images/gallery/gallery-5.jpg';
import gallery06 from '../assets/images/gallery/gallery-6.jpg';
import gallery07 from '../assets/images/gallery/gallery-7.jpg';
import gallery08 from '../assets/images/gallery/gallery-8.jpg';
import gallery09 from '../assets/images/gallery/gallery-9.jpg';

class Footer2 extends Component {
    render() {
        return (
            <>
                {/* <!-- Main Footer --> */}
                <footer class="main-footer style-two">
                    <div class="auto-container">
                        {/* <!--Widgets Section--> */}
                        <div class="widgets-section">
                            <div class="row clearfix">
                                
                                {/* <!--Column--> */}
                                <div class="column col-lg-4">
                                    <div class="footer-widget logo-widget">
                                        <div class="widget-content">
                                            <div class="footer-logo">
                                                <Link to={'/#'}><img src={footerLogo}  alt="" /></Link>
                                            </div>
                                            <div class="text">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                            <ul class="social-links clearfix">
                                                <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-vimeo-v"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!--Column--> */}
                                <div class="column col-lg-4">
                                    <div class="footer-widget links-widget">
                                        <div class="widget-content">
                                            <h3>Links</h3>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <ul>
                                                        <li><Link to={'/#'}>Início</Link></li>
                                                        <li><Link to={'/#'}>Sobre nós</Link></li>
                                                        <li><Link to={'/#'}>Serviços</Link></li>
                                                        <li><Link to={'/#'}>Produtos</Link></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-6">
                                                    <ul>
                                                        <li><Link to={'/#'}>Blog</Link></li>
                                                        <li><Link to={'/#'}>Nosso time</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>	
                                    </div>
                                </div>
                                
                                {/* <!--Column--> */}
                                <div class="column col-lg-4">
                                    <div class="footer-widget instagram-widget">
                                        <h3>Nossos valores</h3>
                                        <div class="inner-box">
                                            <div class="wrapper-box">
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={gallery01} alt=""/>
                                                    <div class="overlay-link"><Link to={gallery01} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={gallery02} alt=""/>
                                                    <div class="overlay-link"><Link to={gallery02} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={gallery03} alt=""/>
                                                    <div class="overlay-link"><Link to={gallery03} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={gallery04} alt=""/>
                                                    <div class="overlay-link"><Link to={gallery04} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={gallery05} alt=""/>
                                                    <div class="overlay-link"><Link to={gallery05} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={gallery06} alt=""/>
                                                    <div class="overlay-link"><Link to={gallery06} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={gallery07} alt=""/>
                                                    <div class="overlay-link"><Link to={gallery07} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={gallery08} alt=""/>
                                                    <div class="overlay-link"><Link to={gallery08} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={gallery09} alt=""/>
                                                    <div class="overlay-link"><Link to={gallery09} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                            </div>
                                            {/* <!-- /.gallery-wrapper --> */}
                                        </div>	
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    
                    {/* <!-- Footer Bottom --> */}
                    <div class="auto-container">				
                        <div class="footer-bottom">
                            <div class="copyright">Copyright By <a href="https://masteradin.com/" target="_blank">Masteradin</a> - 2021</div>
                        </div>
                    </div>
                </footer>


            </>
        );
    }
}

export default Footer2;