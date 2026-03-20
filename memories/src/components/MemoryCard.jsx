//

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MemoryCard = ({ memories, fetchMemories, removeMemory }) => {
  const navigate = useNavigate();
  // const [memories, setMemories] = useState([
  //   {
  //     title: "Sample Memory",
  //     content: "This is a sample memory content.",
  //   },
  // ]);
  const [card, setCard] = useState(false);
  const [list, setList] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    fetchMemories();
  }, []);

  const addMemory = async () => {
    if (!newTitle || !newContent) return;

    try {
      await axios.post("http://localhost:3000/memories", {
        title: newTitle,
        content: newContent,
      });

      setNewTitle("");
      setNewContent("");
      fetchMemories();
    } catch (error) {
      console.error(error);
    }
  };

  // const removeMemory = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:3000/memories/${id}`);
  //     fetchMemories();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const ChangeCard = () => {
    setCard((prev) => !prev);
  };
  const ChangeList = () => {
    setList((prev) => !prev);
  };

  return (
    <div>
      <h1 className="Main-Heading text-2xl ">My Memories</h1>
      <div className="input-div">
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
      </div>

      <button className="add-btn" onClick={addMemory}>
        Add Memory
      </button>
      <div>
        <button
          className="bg-[#bb5a239c] border border-solid border-white m-3 p-2 rounded-2xl hover:bg-[#35280e9c] hover:text-white"
          onClick={ChangeCard}
        >
          Card
        </button>
        <button
          className="bg-[#bb5a239c] border border-solid border-white m-3 p-2 rounded-2xl hover:bg-[#35280e9c] hover:text-white"
          onClick={ChangeList}
        >
          List
        </button>
      </div>

      <div className="nav-buttons">
        <button className="route-btn" onClick={() => navigate("/card")}>
          View as Cards
        </button>
        <button className="route-btn" onClick={() => navigate("/list")}>
          View as List
        </button>
        <button className="route-btn" onClick={() => navigate("/")}>
          Hide All
        </button>
      </div>

      {list ? (
        <div className="memories-mainContainer">
          <ul className="memories-container ">
            {memories.map((mem) => (
              <li key={mem._id}>
                <p>{mem.title}</p>
                <p>{mem.content}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeMemory(mem._id)}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {card ? (
        <div className="memories-Card">
          {memories.map((mem) => (
            <div key={mem._id} className="Card-item">
              <p>{mem.title}</p>
              <p>{mem.content}</p>
              <button
                className="remove-btn"
                onClick={() => removeMemory(mem._id)}
              >
                x
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default MemoryCard;
