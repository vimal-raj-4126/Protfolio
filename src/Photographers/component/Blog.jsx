import React, { useContext } from "react";
import Slider from "react-slick";
import "../../Photographers/css/component/Blog.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MyContext } from "../context/MyContext";

const Blog = () => {
  const { blogdata } = useContext(MyContext);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };


  return (
    <section className="blog">
      <h2 className="heading">Blogs</h2>
      <p className="subtext">Latest insights and technical articles</p>

      <Slider {...settings} className="blog-slider">
        {blogdata.map((item, index) => {
          const Icon = item.icon;
          return (
            <div className="blog-card" key={index}>
              <div className="blog-icon"><Icon size={50} color="#007bff" /></div>
              <h3 className="blog-title">{item.name}</h3>
              <p className="blog-desc">{item.description}</p>
              <a href={item.link} target="_blank" rel="noreferrer" className="blog-link">Read More</a>
            </div>
          );
        })}

      </Slider>
    </section>
  );
};

export default Blog;
