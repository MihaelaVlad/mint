import "./App.css";
import { useState } from "react";
import MainMint from "./MainMint";
import NavBar from "./NavBar";
import videoBackgroundSrc from "./assets/background/cyber-punk.mp4";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="overlay">
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts}></NavBar>
        <MainMint accounts={accounts} setAccounts={setAccounts}></MainMint>
      </div>

      <div>
        <video autoPlay loop playsInline muted className="video-background">
          <source src={videoBackgroundSrc} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default App;
