import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css';
import Hero from './Components/Hero/Hero';
import Counter from './Components/Counter/Counter';
import About from './Components/About/About';

export default function App() {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Counter/>
      <About/>
    </div>
  )
}
