import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CaroselBody() {
  return (
    <Carousel
      centerMode={true}
      centerSlidePercentage={100}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      emulateTouch={true}
      autoPlay={true}
      interval={4000}
      transitionTime={1000}
      useKeyboardArrows={true}
      className="home__img"
    >
      <div>
        <img
          src="https://m.media-amazon.com/images/I/61N83xtyr6L._SX3000_.jpg"
          alt="1"
        />
      </div>
      <div>
        <img
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt="2"
        />
      </div>
      <div>
        <img
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt="3"
        />
      </div>
      <div>
        <img
          src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
          alt="4"
        />
      </div>
      <div>
        <img
          src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
          alt="5"
        />
      </div>
    </Carousel>
  );
}

export default CaroselBody;
