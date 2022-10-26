import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
//import Navbar from "./components/navbar";
//import RecordList from "./components/recordList";
//import Edit from "./components/edit";
//import Create from "./components/create";
//import HomePage from "./components/homepage";
import Blog  from "./containers/blog/blog";
import Features from "./containers/features/features";
import Footer from "./containers/footer/footer";
import Header from "./containers/header/header";
import  Posibility  from "./containers/possibility/possibility";
import { WhatGPT3 } from "./containers/whatGPT3/whatGPT3";
import CTA from "./components/cta/cta";
import Brand from "./components/brand/brand";
import Navbar from "./components/navbar/navbar";
import './App.css'
//import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers/index.js";
//import {CTA, Brand, Navbar} from "./components/index.js";


const App = () => {
 return (
   <div className = 'App'>
    <div className='gradient__bg'>
     <Navbar />
     <Header/>
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Posibility/>
    <CTA/>
    <Blog/>
    <Footer/>
   </div>
 );
};
 
export default App;