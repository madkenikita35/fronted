import React from "react";
import MemoryCard from "./components/MemoryCard";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<MemoryCard />} />
      </Routes>
    </Background>
  );
};

export default App;
