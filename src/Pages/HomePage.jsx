import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../Componenets/NavBar"
import BackGround from './../Componenets/BackGround';
import Intrest from './../Componenets/Intrest';
import Tokens from './../Componenets/Tokens';
import Footer from './../Componenets/Footer';

const HomePage = () => {
  return (
    <>
      <NavBar />

      <BackGround />
      <Intrest />
      <Tokens/>
      <Footer/>
    </>
  );
};

export default HomePage;
