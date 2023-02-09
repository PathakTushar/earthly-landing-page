import React from "react";
import HeroCarousel from "../components/carousel/HeroCarousel";
import Contact from "../components/contact/Contact";
import Footer from "../components/UI/Footer";
import Chat from "../components/UI/Chat";
import ProductCarousel from "../components/carousel/ProductCarousel";
import About from "../components/banners/About";
import ProductGallery from "../components/carousel/ProductGallery";
import Poster from "../components/banners/Poster";
import MapAndJoin from "../components/banners/MapAndJoin";
import Parallax from "../components/parallax/Parallax";
import ParallaxSec from "../components/parallax/ParallaxSec";
import Navbar from "../components/UI/Navbar"; 
import SimpleDialogDemo from "../components/productOverlay/ProductOverlay";
import Open from "../components/productOverlay/Open";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Chat />
      <HeroCarousel />
      <ProductCarousel />
      <Parallax />
      <About />
      <Poster />
      <ProductGallery />
      <Contact />
      <ParallaxSec />
      <MapAndJoin />
      <Footer />
    </div>
  );
};

export default Home;
