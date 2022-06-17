import Cards from "../components/Cards";
import HeadImage from "../components/HeadImage";
import NavBar from "../components/NavBar";
import React from "react";

function Home() {
  // add these 3 components to Home page
  return (
    <div>
      <HeadImage />
      <Cards />
      <NavBar />
    </div>
  );
}
export default Home;
