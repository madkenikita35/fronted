// import React from "react";
// import MemoryCard from "./components/MemoryCard";
// import { Routes, Route } from "react-router-dom";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<MemoryCard />} />
//       <Route path="/list" element={<MemoryCard view="list" />} />
//       <Route path="/card" element={<MemoryCard view="card" />} />
//     </Routes>
//   );
// };

// export default App;

import React from "react";
import MemoryCard from "./components/MemoryCard";
import { Routes, Route } from "react-router-dom";
import CardComponent from "./components/CardComponent";
import ListComponent from "./components/ListComponent";
import { useState } from "react";

const App = () => {
  const [memories, setMemories] = useState([
    {
      title: "Sample Memory",
      content: "This is a sample memory content.",
    },
  ]);
  return (
    <Routes>
      <Route
        path="/"
        element={<MemoryCard setMemories={setMemories} memories={memories} />}
      />
      <Route path="/list" element={<CardComponent view="list" />} />
      <Route path="/card" element={<ListComponent view="card" />} />
    </Routes>
  );
};

export default App;
