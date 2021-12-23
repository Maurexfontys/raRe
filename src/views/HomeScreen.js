import React from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "../components/GlobalStyles";
import Landing from "../components/pages/Landing";

class HomeScreen extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyles />
        <Landing />
      </BrowserRouter>
    );
  }
}

export { HomeScreen };
export default HomeScreen;
