import React from "react";
import MemoryCard from "./components/MemoryCard";
import { Routes, Route } from "react-router-dom";
import CardComponent from "./components/CardComponent";
import ListComponent from "./components/ListComponent";
import { useState } from "react";
import axios from "axios";
import UpdateMemory from "./components/UpdateMemory";

const App = () => {
  const [memories, setMemories] = useState([
    {
      title: "Sample Memory",
      content: "This is a sample memory content.",
    },
  ]);

  const fetchMemories = async () => {
    try {
      const res = await axios.get("http://localhost:3000/memories");
      setMemories(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeMemory = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/memories/${id}`);
      fetchMemories();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MemoryCard
            memories={memories}
            fetchMemories={fetchMemories}
            removeMemory={removeMemory}
          />
        }
      />
      <Route
        path="/list"
        element={
          <ListComponent
            view="list"
            memories={memories}
            removeMemory={removeMemory}
          />
        }
      />
      <Route
        path="/card"
        element={
          <CardComponent
            view="card"
            memories={memories}
            removeMemory={removeMemory}
          />
        }
      />

      <Route
        path="/update/:id"
        element={
          <UpdateMemory memories={memories} fetchMemories={fetchMemories} />
        }
      />
    </Routes>
  );
};

export default App;
