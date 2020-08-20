import React from "react";

import { PanelHeader } from "./PanelHeader";
import { ContentApp } from "./ContentApp";

export const App = () => {
  return (
    <div className="App">
      <div className="container"></div>
      <PanelHeader />
      <ContentApp />
    </div>
  );
};
