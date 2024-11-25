import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Hero from './components/Hero';
import Team from './components/Team';
import Loginn from './components/Loginn';
import Signupp from './components/Singupp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Orderr from './components/orderr';
import Contactt from './components/Contactt';
import Comment from './components/Comment';
import Burgerr from './components/Burgerr';
import Tea from './components/Tea';
import Baryani from './components/Baryani';
import Mangojuice from './components/Mango juice';
import Samosa from './components/Samosa';
import Shawarma from './components/Shawarma';
import StickyFries from './components/Sticky Fries';
import Simpleburger from './components/Simple burger';
import ColdDrinks from './components/Cold Drinks';
import Juices from './components/Juices';
import Fries from './components/Fries';
import Bananajuice from './components/Banana juice';
import Footer from './components/footer';//Import Footer component

function App() {
  return (
    <Router>
      {/* Always show Navbar */}
      <Navbar />
      
      {/* Define routes */}
      <Routes>
        <Route path="/" element={<><Hero /><Home /><Team /></>} />
        <Route path="/hero" element={<><Hero /><Home /><Team /></>} />
        <Route path="/Loginn" element={<Loginn />} />
        <Route path="/Singupp" element={<Signupp />} />
        <Route path="/team" element={<Team />} />
        <Route path="/orderr" element={<Orderr />} />
        <Route path="/Contactt" element={<Contactt />} />
        <Route path="/Comment" element={<Comment />} />
        <Route path="/Burgerr" element={<Burgerr />} />
        <Route path="/Tea" element={<Tea />} />
        <Route path="/Baryani" element={<Baryani />} />
        <Route path="/Mango juice" element={<Mangojuice />} />
        <Route path="/Samosa" element={<Samosa />} />
        <Route path="/Shawarma" element={<Shawarma />} />
        <Route path="/Sticky Fries" element={<StickyFries />} />
        <Route path="/Simple burger" element={<Simpleburger />} />
        <Route path="/Cold Drinks" element={<ColdDrinks />} />
        <Route path="/Juices" element={<Juices />} />
        <Route path="/Fries" element={<Fries />} />
        <Route path="/Banana juice" element={<Bananajuice />} />
      </Routes>

      {/* Footer section at the bottom */}
      <Footer />
    </Router>
  );
}

export default App;
