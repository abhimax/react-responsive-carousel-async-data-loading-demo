import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";

const FetchAlbumCarousel = () => {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    const fetchSlideData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      const data = await response.json();
      setSlideData(
        data.map((item) => ({ image: item.url, caption: item.title }))
      );
    };
    fetchSlideData();
  }, []);

  return (
    <>
      <h2>React Responsive Carouse</h2>
      <Carousel>
        {slideData.map((image) => {
          return (
            <div key={Math.random()}>
              <img src={image.image} alt={image.image} />
              <p className="legend">{image.caption}</p>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default FetchAlbumCarousel;
