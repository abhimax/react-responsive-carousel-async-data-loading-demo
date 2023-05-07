import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";

const FetchAlbumChunkCarousel = () => {
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

  const chunkedSlideData = Array.from(
    { length: Math.ceil(slideData.length / 8) },
    (_, index) => {
      const startIndex = index * 8;
      return slideData.slice(startIndex, startIndex + 8);
    }
  );

  return (
    <>
      <h2>Fetch Album Chunk Carousel</h2>
      <Carousel showThumbs={false}>
        {chunkedSlideData.map((slideData) => {
          return (
            <div className="slide-wrapper" key={Math.random()}>
              {slideData.map((image) => {
                return (
                  <div key={Math.random()} className="slide-tile">
                    <img
                      className="slide-image"
                      src={image.image}
                      alt={image.image}
                    />
                    <p className="image-des">{image.caption}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default FetchAlbumChunkCarousel;
