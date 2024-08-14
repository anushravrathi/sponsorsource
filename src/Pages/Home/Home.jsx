import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Whyus from "../../components/Whyus/Whyus";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
// import Howit from "../../components/HowitWork/Howit";
import Howit from "../../components/HowitWork/Howit";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Whyus />
      <Howit />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
