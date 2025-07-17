import React, { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";
import "../../FreelanceAndDeveloper/css/component/Certifications.css";

const Certifications = () => {
  const { certification } = useContext(MyContext);
  const categories = Object.keys(certification);
  const [category, setCategory] = useState(categories[0]);
  const [previewImage, setPreviewImage] = useState(null);

  const openPreview = (image) => setPreviewImage(image);
  const closePreview = () => setPreviewImage(null);

  return (
    <section className="certifications">
      <h2 className="heading">Certifications</h2>

      <div className="cert-btn-group">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`cert-btn ${category === cat ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="cert-container">
        {certification[category].map((item) => (
          <div className="cert-card" key={item.id} onClick={() => openPreview(item.image)}>
            <img src={item.image} alt={`Certificate ${item.id}`} />
            <p className="cert-year">{item.year}</p>
          </div>
        ))}
      </div>

      {previewImage && (
        <div className="image-popup" onClick={closePreview}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePreview}>×</button>
            <img src={previewImage} alt="Preview" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
