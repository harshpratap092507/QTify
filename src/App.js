// import "./App.css";
// import Navbar from "./components/Navbar/Navbar.jsx";
// import Hero from "./components/HeroSection/Hero.jsx";
// import Card from "./components/Card/Card.jsx";

// function App() {
//   return (
//     <div className="App">
//       <nav className="navbarContainer">
//         <Navbar />
//       </nav>
//       <div className="hero">
//         <Hero />
//       </div>
//       <Card />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { StyledEngineProvider } from "@mui/styled-engine";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";

function App() {
  const [data, setData] = useState({});
  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        return { ...prevState, [key]: data };
      });
    });
  };
  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  }, []);
  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
