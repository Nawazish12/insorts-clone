import React from "react";
import { Box } from "@material-ui/core";
import Header from "./components/Header";
import Infoheader from "./components/Infoheader";
import DisplayData from "./components/DisplayData";

const App = () => {
  return (
    <div>
      <Box>
        <Header />
        <Infoheader />
        <DisplayData />
      </Box>
    </div>
  );
};

export default App;
