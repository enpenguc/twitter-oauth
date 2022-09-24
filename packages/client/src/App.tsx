import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {

  const toLogin = () => {
    
    // const url =
    //   "https://twitter.com/i/oauth2/authorize?response_type=code&client_id=M1M5R3BMVy13QmpScXkzTUt5OE46MTpjaQ&redirect_uri=https://www.example.com&scope=tweet.read%20users.read%20offline.access&state=state&code_challenge=challenge&code_challenge_method=plain";
    location.href = '/_api_/login';
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          className="sign-in-with-twitter"
          title="Twitter登录"
          onClick={toLogin}
        ></button>
      </div>
    </div>
  );
}

export default App;
