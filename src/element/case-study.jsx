import React, { Component } from 'react';
// import { Link } from 'gatsby';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image24 from './../assets/images/gallery/gallery-24.jpg';

// const testimonialbg1 = './../assets/images/background/image-9.jpg';

const caseStudy_content = [
    {
        image: image24,
        h5: 'Consultoria em benefícios',
        h2: 'Otimização de processos com seguro de vida e saúde.',
    },
    {
        image: image24,
        h5: 'Consultoria em benefícios',
        h2: 'Otimização de processos com seguro de vida e saúde.',
    },
    {
        image: image24,
        h5: 'Consultoria em benefícios',
        h2: 'Otimização de processos com seguro de vida e saúde.',
    },
    {
        image: image24,
        h5: 'Consultoria em benefícios',
        h2: 'Otimização de processos com seguro de vida e saúde.',
    },
    {
        image: image24,
        h5: 'Consultoria em benefícios',
        h2: 'Otimização de processos com seguro de vida e saúde.',
    },
    {
        image: image24,
        h5: 'Consultoria em benefícios',
        h2: 'Otimização de processos com seguro de vida e saúde.',
    },
    {
        image: image24,
        h5: 'Consultoria em benefícios',
        h2: 'Otimização de processos com seguro de vida e saúde.',
    }
]


class CaseStudy extends Component {


    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        };
        return (
            <>

                <Slider {...settings}>
                    {caseStudy_content.map((item, id) => (
                        <div class="case-block-one">
                            <div class="inner-box">
                                <div class="image"><img src={item.image} alt="" /></div>
                                <div class="overlay">
                                    <div>
                                        <h5>{item.h5}</h5>
                                        <h2>{item.h2}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </>
        )
    }
}
export default CaseStudy;