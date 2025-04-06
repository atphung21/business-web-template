import React from "react";

export const ServiceCard = ({
  title,
  description,
  image,
  imageSide,
  subDescription,
  bulletPoints,
  backgroundColor,
}) => {
  const isImageLeft = imageSide === "left";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isImageLeft ? "row" : "row-reverse",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        padding: "3rem",
        backgroundColor: backgroundColor ? backgroundColor : "white",
        borderRadius: "8px",
        textAlign: "center", // Align text for better reading
        alignItems: "center",
        gap: "1rem", // Creates spacing between image and text
        flexWrap: "wrap",
        letterSpacing: "2px",
        width: "fit-content(100%)",
        margin: "1.5rem auto",
        justifyContent: 'center',
      }}
    >
      <div style={{ flex: "0 1 30vh" }}>
        {" "}
        {image && (
          <img
            src={image}
            alt={title}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        )}
      </div>
      <div style={{ flex: "1" }}>
        <h3
          style={{
            fontSize: "2rem",
            fontWeight: "normal",
            fontFamily: '"Playfair Display", Georgia, serif',
            paddingLeft: "20px",
            textAlign: 'left',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "1rem",
            color: "#4a5568",
            fontFamily: '"Playfair Display", Georgia, serif',
            textAlign: 'left',
            paddingLeft: "20px",
          }}
        >
          {description}
          <br></br>
          {bulletPoints && (
            <ul style={{ maxWidth: '25vh', alignContent: 'left', paddingLeft: '2vh' }}>
              {bulletPoints.map((item, index) => (
                <li key={index}  style={{ textAlign: 'left', marginBottom: '8px' }}>
                  {item}
                </li>
              ))}
            </ul>
          )}
          <br></br>
          <br></br>
          {subDescription}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;