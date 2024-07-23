import { useState } from "react";
import "./App.css";
import { LandingPage } from "./LandingPage";
import Musixs from "./Musixs";
function App() {
  const [inLandingPage, setInLandingPage] = useState(true);
  return (
    <div>
      {inLandingPage ? (
        <LandingPage setInLandingPage={setInLandingPage} />
      ) : (
        <Musixs />
      )}
    </div>
  );
}

export default App;
