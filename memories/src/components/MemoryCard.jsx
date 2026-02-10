import React, { useState, useEffect } from "react";
import axios from "axios";

const MemoryCard = () => {
  const [memories, setMemories] = useState([
    {
      title: "Sample Memory",
      content: "This is a sample memory content.",
    },
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  // Fetch memories from DB when component loads
  useEffect(() => {
    fetchMemories();
  }, []);

  const fetchMemories = async () => {
    try {
      const res = await axios.get("http://localhost:3000/memories");
      setMemories(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addMemory = async () => {
    if (!newTitle || !newContent) return;

    try {
      await axios.post("http://localhost:3000/memories", {
        title: newTitle,
        content: newContent,
      });

      setNewTitle("");
      setNewContent("");
      fetchMemories(); // refresh list
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTitle}
        placeholder="Enter a memory title"
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        value={newContent}
        placeholder="Enter content for the memory"
        onChange={(e) => setNewContent(e.target.value)}
      />

      <button onClick={addMemory}>Add Memory</button>

      <div>
        <ul>
          {memories.map((mem) => (
            <li key={mem._id}>
              <p>{mem.title}</p>
              <p>{mem.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MemoryCard;
