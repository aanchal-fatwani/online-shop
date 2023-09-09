import React, { useEffect, useState } from "react";
import Slider from "react-slick";

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  const images = [
    {
      img: "https://i.dummyjson.com/data/products/4/1.jpg",
      category: "smartphones",
    },
    {
      img: "https://i.dummyjson.com/data/products/9/1.jpg",
      category: "laptops",
    },
    {
      img: "https://i.dummyjson.com/data/products/13/1.jpg",
      category: "fragrances",
    },
    {
      img: "https://i.dummyjson.com/data/products/16/4.jpg",
      category: "skincare",
    },
    // {
    //   img: "https://i.dummyjson.com/data/products/22/1.jpg",
    //   category: "groceries",
    // },
    {
      img: "https://i.dummyjson.com/data/products/26/1.jpg",
      category: "home-decoration",
    },
  ];
  const [imgArr, setImgArr] = useState([]);
  useEffect(() => {
    setImgArr(
      images.map((el) => (
        <div>
          <a href={"/category/" + el.category}>
            <img
              style={{ width: "40rem", height: "18rem", padding: "1rem" }}
              src={el.img}
            />
          </a>
        </div>
      ))
    );
  }, []);
  return <Slider {...settings}>{imgArr}</Slider>;
}