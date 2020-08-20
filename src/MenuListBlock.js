import React from "react";

export const MenuListBlock = () => {
  return (
    <div className="MenuListBlock">
      <div className="tableBlockMenu">
        <div className="elementMenu home">
          <button>Home</button>
          <div></div>
        </div>
        <div className="elementMenu settings">
          <button>Settings</button>
          <div></div>
        </div>
        <div className="elementMenu about">
          <button>About</button>
          <div></div>
        </div>
        <div className="elementMenu danger">
          <button>Logout</button>
          <div></div>
        </div>
      </div>
    </div>
  );
};
