import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Whyus from "../../components/Whyus/Whyus";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Whyus />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
