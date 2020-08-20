import React, { useState } from "react";
import { SvgButton } from "./SvgButton";
import { Menu } from "./Menu";
import "./PanelHeader.css";

const svgShow = {
  viewBox: "0 0 314 200",
  fill: "#0e6bb8",
  path: (
    <path
      d="M16.1471 0H297.853C306.37 0 313.274 6.90401 313.274 15.421C313.274 23.1315 313.274 26.9868 311.346 28.9144C309.419 30.842 305.564 30.842 297.853 30.842H16.1471C8.43657 30.842 4.58132 30.842 2.6537 28.9144C0.726074 26.9867 0.726074 23.1315 0.726074 15.421C0.726074 6.90501 7.63008 0 16.1471 0ZM297.853 84.578H16.1471C7.63008 84.578 0.726074 91.483 0.726074 99.999C0.726074 108.516 7.63108 115.42 16.1471 115.42H297.853C306.37 115.42 313.274 108.515 313.274 99.999C313.274 91.482 306.37 84.578 297.853 84.578ZM297.853 169H16.1471C8.43658 169 4.58133 169 2.6537 170.928C0.726074 172.855 0.726074 176.711 0.726074 184.421C0.726074 192.938 7.63108 199.842 16.1471 199.842H297.853C306.37 199.842 313.274 192.937 313.274 184.421C313.274 176.71 313.274 172.855 311.346 170.928C309.419 169 305.564 169 297.853 169Z" />
  ),
};

export const PanelHeader = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <div className="PanelHeader">
      <div className="logoBox">
        <SvgButton
          svgProps={svgShow}
          callback={() => setDisplayMenu(!displayMenu)}
        />
        <div className="logo">To Do List</div>
      </div>
      <Menu
        setDisplayMenu={() => setDisplayMenu(!displayMenu)}
        display={displayMenu}
        SvgButton={SvgButton}
      />
    </div>
  );
};
