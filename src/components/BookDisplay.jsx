import React, { useState } from "react";

const BookDisplay = ({ title, description, amazonLink, fontColor }) => {
  const images = [
    require(`../images/${title}-front.png`),
    require(`../images/${title}-inner.png`),
    require(`../images/${title}-back.png`)
  ];

  const [current, setCurrent] = useState(0);

  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);
  const nextImage = () => setCurrent((current + 1) % images.length);

  return (
    <div
      id="books"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        height: "52vh",
        width: "98vw",
        gap: "16px",
        padding: "1px 15px 5px 15px",
      }}
    >
      {/* First column: Image carousel */}
      <div
        style={{
          position: "relative",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <img
          src={images[current]}
          alt={`Book ${current + 1}`}
          style={{
            maxWidth: "80%",
            maxHeight: "80%",
            objectFit: "contain",
            marginBottom: "12px",
            display: "block",
          }}
        />
        {/* Carousel navigation buttons */}
        <button
          onClick={prevImage}
          style={{
            position: "absolute",
            left: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.0)",
            border: "none",
            fontSize: "2.5rem",
            color: "#e8dfcf", // <-- updated for transparency
            cursor: "pointer",
            zIndex: 2,
            padding: 0,
          }}
          aria-label="Previous image"
        >
          ◀
        </button>
        <button
          onClick={nextImage}
          style={{
            position: "absolute",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.0)",
            border: "none",
            fontSize: "2.5rem",
            color: "#e8dfcf", // <-- updated for transparency
            cursor: "pointer",
            zIndex: 2,
            padding: 0,
          }}
          aria-label="Next image"
        >
          ▶
        </button>
      </div>

      {/* Right column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '106px', marginRight: '106px', overflowY: 'auto', fontSize: '1.3rem', color: fontColor }}>
        <div
          style={{ fontFamily: 'Delius' }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <button
          style={{
            padding: "12px 24px",
            fontSize: "1rem",
            backgroundColor: fontColor,
            cursor: "pointer",
            color: "white",
            width: "auto",
            maxWidth: "200px",
            border: "none",
            fontWeight: 'bold',
            borderRadius: '8px',
            fontFamily: 'Delius, sans-serif',
          }}
          onClick={() => window.open(amazonLink, "_blank", "noopener")}
        >
          Buy with Amazon
        </button>
      </div>
    </div>
  );
};

export default BookDisplay;