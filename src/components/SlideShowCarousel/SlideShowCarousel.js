import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import carousel from '../../images/carousel.png';
import './SlideShowCarousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SlideShowCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 carousel-img"
                    src={carousel}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <button className="find-btn">Get Started <FontAwesomeIcon className="right-arrow" icon={faChevronRight} /></button>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100 carousel-img"
                    src={carousel}
                    alt="Second slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="find-btn">Get Started <FontAwesomeIcon className="right-arrow" icon={faChevronRight} /></button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src={carousel}
                    alt="Third slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <button className="find-btn">Get Started <FontAwesomeIcon className="right-arrow" icon={faChevronRight} /></button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default SlideShowCarousel;