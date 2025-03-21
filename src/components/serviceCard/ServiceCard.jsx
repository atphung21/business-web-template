import React from 'react';

// export const ServiceCard = ({ title, description, image, imageSide }) => (
//     <div style={{ boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", padding: "20px", backgroundColor: "white", borderRadius: "8px", textAlign: "center", margin: "0.5rem", flexWrap: "wrap" }}>
//      <div>
//       <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{title}</h3>
//       <p style={{ fontSize: "1rem", color: "#4a5568" }}>{description}</p>
//       </div>
//       <div style={{ justContent: imageSide}}>
//         {image}
//       </div>
//     </div>
 // );


  export const ServiceCard = ({ title, description, image, imageSide}) => {
    const isImageLeft = imageSide === "left";

    return (
        <div
            style={{
                display: "flex",
                flexDirection: isImageLeft ? "row" : "row-reverse",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                padding: "3.5rem",
                backgroundColor: "white",
                borderRadius: "8px",
                textAlign: "center",  // Align text for better reading
                alignItems: "center",
                gap: "4rem",        // Creates spacing between image and text
                flexWrap: "wrap",
                letterSpacing: "2px",
                width: "80rem",
                margin: "2rem auto",
            }}
        >
            <div style={{ flex: "0 1 30%" }}> {/* Controls image size */}
                {image && <img src={image} alt={title} style={{ width: "100%", borderRadius: "8px" }} />}
            </div>
            <div style={{ flex: "1" }}>
                <h3 style={{ fontSize: "2rem", fontWeight: "normal", fontFamily: '"Playfair Display", Georgia, serif' }}>{title}</h3>
                <p style={{ fontSize: "1rem", color: "#4a5568", fontFamily: '"Playfair Display", Georgia, serif' }}>{description}</p>
            </div>
        </div>
    );
};
