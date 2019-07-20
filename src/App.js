import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
   <div className="container">
       <h1> Learning React </h1>
       <Person
           name="Adhitya" age="29"
       />
       <Person
           name="Rachman" age="12"
       />
       <Person
           name="AR" age="56"
       />
       <Person
           name="Sifat Sifat" age="23"
       > Hi. I am a child </Person>
   </div>
  );
}

export default App;