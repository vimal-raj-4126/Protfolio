import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Photographers/css/component/Gallery.css";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
    const navigate = useNavigate();
    const { gallery } = useContext(MyContext);

    const getLineImages = (line) =>
        gallery.filter(item => item.line === line).flatMap(item => item.images);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } }
        ]
    };
    const settings1 = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2490,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } }
        ]
    };

    return (
        
    <div>
        <h1 className="text-center">Gallery</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eligendi delectus repellat maxime eaque provident tenetur perferendis eos libero dolores?</p>
            <section className="gallery-section">
            <Slider {...settings}>
                {getLineImages("one").map((img, idx) => (
                    <div key={idx} className="gallery-box" onClick={() => navigate("/portfolio")}><img src={img} alt="line1" /></div>
                ))}
            </Slider>

            <Slider {...settings1}>
                {getLineImages("two").map((img, idx) => (
                    <div key={idx} className="gallery-box" onClick={() => navigate("/portfolio")}><img src={img} alt="line2" /></div>
                ))}
            </Slider>

            <Slider {...settings}>
                {getLineImages("three").map((img, idx) => (
                    <div key={idx} className="gallery-box" onClick={() => navigate("/portfolio")}><img src={img} alt="line3" /></div>
                ))}
            </Slider>
        </section>
    </div>
    );
};


export default Gallery;
