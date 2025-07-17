import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";
import "../../Photographers/css/component/GalleryAllImage.css";

const GalleryAllImage = () => {
  const { gallery } = useContext(MyContext);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const allImages = gallery.flatMap(item => item.images);
  const getFilteredImages = () => {
    if (activeCategory === "All") return allImages;
    return gallery
      .filter(item => item.category === activeCategory)
      .flatMap(item => item.images);
  };

  const categories = ["All", ...new Set(gallery.map(item => item.category))];

  return (
    <section className="portfolio-section">
      <h2>My Gallery</h2>

      <div className="category-buttons">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {getFilteredImages().map((img, idx) => (
          <div key={idx} className="portfolio-item" onClick={() => setSelectedImage(img)}>
            <img src={img} alt="portfolio" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="popup-overlay" onClick={() => setSelectedImage(null)}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage} alt="popup" />
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryAllImage;
