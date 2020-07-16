import React from "react";
import Routing from "./Containers/Routing/Routing";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routing />
      </Router>
    </div>
  );
}

export default App;
