import React from "react";

export const ImageRow = ({
  header,
  images,
  imageHeight = "30vh",
  gap = "2rem",
  description,
  fontSize = "1.5rem",
  fontFamily = '"Playfair Display", Georgia, serif',
}) => {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h3
          style={{
            fontSize: "3rem",
            fontWeight: "normal",
            fontFamily: '"Playfair Display", Georgia, serif',
            paddingLeft: "20px",
            textAlign: "center",
            letterSpacing: "2px", // Adds some spacing between letters for aesthetics
          }}
        >
          {header}
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: gap,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`img-${index}`}
            style={{
              height: imageHeight,
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
        ))}
      </div>
      <div style={{ transform: "translateX(50%)", width: '50%', justifyContent: "center", alignItems: "center", paddingTop: "5rem", paddingBottom: '6rem' }}>
        <p
          style={{
            fontSize: fontSize,
            fontWeight: "normal",
            fontFamily: fontFamily,
            textAlign: "center",
            justifyContent: "center", // Center the text
            letterSpacing: "1.5px", // Adds some spacing between letters for aesthetics
            alignItems: "center",
          }}
        >
          {description}
        </p>
      </div>
    </>
  );
};

export default ImageRow;
