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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MemoryCard />} />
      <Route path="/list" element={<MemoryCard view="list" />} />
      <Route path="/card" element={<MemoryCard view="card" />} />
    </Routes>
  );
};

export default App;
