import React from "react";
import { Route, Routes } from 'react-router-dom';
import Structure from './Structure';
import "./forms.css";
import Login from "./login";

const App = () => {
  return (
    
      <Routes>
        <Route exact path="/dashboard/*" element={<Structure />} />
        <Route  path="/" element={<Login />} />
      </Routes>
    
  );
};

export default App;
