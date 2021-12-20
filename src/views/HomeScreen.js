import React from "react";
import { BrowserRouter } from "react-router-dom";

import Landing from "../components/raRe/pages/Landing";

class HomeScreen extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    );
  }
}

export { HomeScreen };
export default HomeScreen;
