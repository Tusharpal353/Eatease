import Lottie from "lottie-react";
import bookvid from "./bookvid.json";
import "./style.css";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "green",
};

const animationStyle = {
  width: "500px",
  height: "600px",
};

function Animation() {
  return (
    <div style={containerStyle}>
      <Lottie style={animationStyle} animationData={bookvid} />
    </div>
  );
}

export default Animation;
