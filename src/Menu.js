import React from "react";
import { MenuListBlock } from "./MenuListBlock";
import "./Menu.css";

const svgHidden = {
  viewBox: "0 0 493 410",
  fill: "#0e6bb8",
  path: (
    <path
      d="M7.86414 185.54L185.544 7.856C190.616 2.784 197.376 0 204.584 0C211.8 0 218.556 2.788 223.628 7.856L239.76 23.992C244.828 29.056 247.62 35.82 247.62 43.032C247.62 50.24 244.828 57.232 239.76 62.296L136.104 166.18H465.424C480.272 166.18 492.004 177.804 492.004 192.656V215.468C492.004 230.32 480.272 243.116 465.424 243.116H134.928L239.756 347.58C244.824 352.652 247.616 359.232 247.616 366.444C247.616 373.648 244.824 380.324 239.756 385.392L223.624 401.476C218.552 406.548 211.796 409.312 204.58 409.312C197.372 409.312 190.612 406.512 185.54 401.44L7.86014 223.76C2.77614 218.672 -0.0198474 211.88 0.000152588 204.66C-0.0158474 197.416 2.77614 190.62 7.86414 185.54Z" />
  ),
};

export const Menu = ({ setDisplayMenu, display, SvgButton }) => {
  return (
    <div className={display ? "Menu" : "hidden"} >
      <div className="menuBox">
        <div className="menuLogoBox">
          <SvgButton
            svgProps={svgHidden}
            callback={() => setDisplayMenu(!display)}
          />
          <div className="logo-showMenu">To Do List</div>
        </div>
        <MenuListBlock />
      </div>
      <div className="emptyBoxMenu" onClick={() => setDisplayMenu(!display)}></div>
    </div>
  );
};
