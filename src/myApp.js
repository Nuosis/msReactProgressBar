import React, { useState } from "react";
import AnimatedBar from "../components/AnitmatedProgressBar";

const MyApp = () => {
  const [btn, setBtn] = useState("");
  return (
    <>
      <div id="progressBar">
        <AnimatedBar/>
      </div>
    </>
  );
};

export default MyApp;
