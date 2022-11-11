import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import Test from './components/Test';
// import Test1 from './components/Test1';
// import Routess from './components/Routest/Routest';
// import { BrowserRouter, Routes, Route, Link, Outlet  } from 'react-router-dom';
// import { Test, Extra } from './components/Test';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <NavBar />
    <Header />
    <About id="about"/>
    <Projects id="projects"/>
    <Contact id="contacts"/>


    {/* <Test1 />
    <Test /> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();