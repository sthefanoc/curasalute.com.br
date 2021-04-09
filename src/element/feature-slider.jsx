import React, { Component } from 'react';
import { Link } from 'gatsby';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import featurebg1 from './../assets/images/background/image-12.jpg';


const Features_content = [
    {
        
        subtitle: 'Para sua família',
        heading1: 'Os melhores planos',
        heading2: 'Para sua família.',
        text: 'Todavia, a mobilidade dos capitais internacionais apresenta tendências no sentido de aprovar a manutenção das novas proposições.',
        link: 'Veja planos',
 
    },
    {
        
        subtitle: 'Para seu negócio',
        heading1: 'Produtos de produtividade',
        heading2: 'Para sua empresa.',
        text: 'Gostaria de enfatizar que a consolidação das estruturas é uma das consequências das condições inegavelmente apropriadas.',
        link: 'Veja produtos',
 
    },


]


class Featureslide extends Component {


    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <>
                
                <section class="feature-section-two">
                    <Slider {...settings} className="theme_carousel">
                        {Features_content.map((item, id) => (
                            <div class="slide-item" key={id}>
                                <div 
                                    class="slide-bg" 
                                    style={{ backgroundImage: `url(${featurebg1})` }}>
                                </div>
                                <div class="auto-container">
                                    <div class="content-box">
                                        <div class="sec-title">
                                            <div class="sub-title"> {item.subtitle}</div>
                                            <h2>{item.heading1} <br/>{item.heading2}</h2>
                                        </div>
                                        <div class="text">{item.text}</div>
                                        <div class="btn-box"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">{item.link}</span></Link></div>
                                        <div class="icon"><span class="flaticon-insurance"></span></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
  
                </section>

            </>
        )
    }
}
export default Featureslide;