import * as React from "react";
import { Routes } from "./routes"

const App = () => {
  return (
    <gridLayout rows='auto, *' background="black">
      <Routes />
    </gridLayout>
  );
}

export default App;
