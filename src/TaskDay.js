import React, { useState } from "react";
import { Task } from "./Task";
import { SvgButton } from "./SvgButton";

const svgPlus = {
  viewBox: "0 0 32 32",
  fill: "#ffffff",
  path: (
    <path
      d="M18.5264 2.52631C18.5264 1.13107 17.3953 0 16 0C14.6047 0 13.4736 1.13107 13.4736 2.52631V13.4737H2.52637C1.1311 13.4737 0 14.6048 0 16C0 17.3952 1.1311 18.5263 2.52637 18.5263H13.4736V29.4737C13.4736 30.8689 14.6047 32 16 32C17.3953 32 18.5264 30.8689 18.5264 29.4737V18.5263H29.4736C30.8689 18.5263 32 17.3952 32 16C32 14.6048 30.8689 13.4737 29.4736 13.4737H18.5264V2.52631Z"
      fill="#ffffff"
    />
  ),
};

export const TaskDay = () => {
  const [tasts, addTask] = useState([<Task key={0} />])
  return (
    <div className="TaskDay">
      <div className="TaskHeadBox">
        <div>Theme project</div>
      </div>
      <div className="TaskMain">
        {tasts}
      </div>
      <div className="TaskFooterBox">
        <div className="buttonFooter">
          <SvgButton svgProps={svgPlus} callback={() => addTask([...tasts, <Task key={tasts.length} />])} />
        </div>
      </div>

    </div>
  );
};



