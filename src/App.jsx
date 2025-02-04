import React from "react";
import Nav from "./components/Nav/Nav.jsx";
import Cardcontainer from "./components/Cardcontainer/Cardcontainer.jsx"
import Footer from "./components/Footer/Footer.jsx"
function App() {
  return (
    <div>
      <Nav />
      <Cardcontainer /><Cardcontainer /><Cardcontainer />
      <Footer />
    </div>
  );
}

export default App;
