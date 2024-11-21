import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("green");

  useEffect(() => {
    let timer;

   
    switch (color) {
      case "green":
        timer = setTimeout(() => setColor("yellow"), 3000); 
        break;
      case "yellow":
        timer = setTimeout(() => setColor("red"), 2000); 
        break;
      case "red":
        timer = setTimeout(() => setColor("yellow"), 5000);
        break;
      default: 
        timer = setTimeout(() => setColor("green"), 2000);
        break;
    }

    
    return () => clearTimeout(timer);
  }, [color]);

  
  const circleStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    backgroundColor: color,
    margin: "0 auto",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
    transition: "background-color 0.5s ease",
  };

  
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  };

  return (
    <div style={containerStyle}>
      <div style={circleStyle}></div>
    </div>
  );
};

export default TrafficLight;
