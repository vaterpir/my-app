import React, { useState } from "react";
import { SvgButton } from "./SvgButton";
import "./Task.css";



const svgCheckBox = {
  viewBox: "0 0 13 11",
  fill: "#ffffff",
  path: (
    <path d="M4.97794 9.90961C4.85385 10.0346 4.68455 10.1043 4.50868 10.1043C4.33281 10.1043 4.1635 10.0346 4.03941 9.90961L0.291698 6.1576C-0.0972326 5.76829 -0.0972326 5.13699 0.291698 4.74841L0.760967 4.27855C1.15002 3.88924 1.77996 3.88924 2.16889 4.27855L4.50868 6.62076L10.8311 0.291985C11.2202 -0.0973284 11.8507 -0.0973284 12.239 0.291985L12.7083 0.761838C13.0972 1.15115 13.0972 1.78233 12.7083 2.17103L4.97794 9.90961Z" fill="white"/>
  ),
}

export const Task = ({ day }) => {
  const [styleChechBox, setStyleChechBox] = useState(false)
  const switchChechBox = () => {
    console.log(styleChechBox);
    setStyleChechBox(!styleChechBox)
  }
  return (
    <div className="Task">
      <div className="textTask">Lorem ... more more text</div>
      <div className="timeTask">01.04.2020</div>
      <div className={`checkBox ${(styleChechBox) ? "checkBoxEnable" : "checkBoxDisable"}`}>
        <SvgButton svgProps={svgCheckBox} callback={switchChechBox} />
      </div>
    </div>
  );
};
