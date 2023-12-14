import React from "react";
import "./indexpage.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    // Add more image URLs here as needed
  ];
  
  const MultiCarousel = () => {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
  
    return (
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {images.map((image, index) => (
          <img src={image} alt={`image-${index}`} key={index} className="carsel"/>
        ))}
      </Carousel>
    );
  };
  export default MultiCarousel