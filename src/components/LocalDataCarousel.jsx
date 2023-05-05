import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slidesData = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1380&t=st=1683192571~exp=1683193171~hmac=41cac3955e087b7c824349771233cc2127cf50c36ef769b7512224434b3b2b54",
    caption: "Caption 1",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?w=1380&t=st=1683192581~exp=1683193181~hmac=7b20cfeac744bea494dfc4167c0591dc84a05efb66a28c49a5c2bee5a71cdc56",
    caption: "Caption 2",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/beautiful-shot-crystal-clear-lake-snowy-mountain-base-during-sunny-day_181624-5459.jpg?w=1380&t=st=1683192595~exp=1683193195~hmac=7e5127636118d63c26f9692de689e98379ab6e32db2d1479b4cb92175ebd38ba",
    caption: "Caption 3",
  },
];

function LocalDataCarousel() {
  return (
    <>
      <h2>Local Data Carousel</h2>
      <Carousel>
        {slidesData.map((slide) => (
          <div key={slide.id}>
            <img src={slide.image} alt={slide.caption} />
            <p className="legend">{slide.caption}</p>
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default LocalDataCarousel;
