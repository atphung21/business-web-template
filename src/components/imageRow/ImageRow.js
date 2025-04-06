import React from "react";

export const ImageRow = ({
  header,
  images,
  imageHeight = "30vh",
  gap = "2rem",
  description,
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
      <div style={{ justifyContent: "center", alignItems: "center", paddingTop: "6rem", paddingBottom: '6rem', width: '100%' }}>
        <h2
          style={{
            width: "100%", // Ensure it takes full width for centering
            fontSize: "1.25rem",
            fontWeight: "normal",
            fontFamily: '"Playfair Display", Georgia, serif',
            textAlign: "center",
            justifyContent: "center", // Center the text
            letterSpacing: "1px", // Adds some spacing between letters for aesthetics
            alignItems: "center",
          }}
        >
          {description}
        </h2>
      </div>
    </>
  );
};

export default ImageRow;
