import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import House from "./components/pages/House";
import Error from "./components/pages/Error";
import About from "./components/pages/About";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "./App.css";

const HouseId = () => {
  const { id } = useParams();
  return <div>House {id}</div>;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/house/:id' element={<House />} />
          <Route path='/error' element={<Error />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<House />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
