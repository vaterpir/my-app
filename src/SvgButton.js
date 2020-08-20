import React from "react"

export const SvgButton = ({ svgProps, callback }) => {
    const { path, viewBox, fill } = svgProps;
    return (
      <button className="svgMenu" onClick={callback}>
        <svg
          width="24"
          height="24"
          viewBox={viewBox}
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          {path}
        </svg>
      </button>
    );
  };

