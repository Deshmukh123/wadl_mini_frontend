import React, { Fragment } from "react";
// import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import AboutUs from "../components/About-us/AboutUs";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";
import Notes from "../components/Notes/notes";
import Footer from "../components/Footer/Footer";
// import  Login from "../components/login/login";
// import Register from "../components/register/register";
const Home = () => {
  return (
    <Fragment>
      {/* <Header /> */}
      <HeroSection /> <br></br>
      <AboutUs /><br></br>
      <ChooseUs /><br></br>
      <Features />
      <FreeCourse /><br></br>
      {/* <Notes /> */}
    </Fragment>
  );
};

export default Home;
