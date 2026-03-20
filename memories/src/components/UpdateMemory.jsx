// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// const UpdateMemory = ({ memories, fetchMemories }) => {
//   const [newTitle, setNewTitle] = useState("");
//   const [newContent, setNewContent] = useState("");

//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchMemories();
//   }, []);

//   const updateMemory = async () => {
//     if (!newTitle || !newContent) return;

//     try {
//       await axios.put(`http://localhost:3000/memories/${id}`, {
//         title: newTitle,
//         content: newContent,
//       });

//       setNewTitle("");
//       setNewContent("");
//       fetchMemories();
//       navigate("/");
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div>
//       <h1 className="Main-Heading text-2xl ">Update Memories</h1>
//       <div className="input-div">
//         <input
//           type="text"
//           value={newTitle}
//           placeholder="Enter a memory title"
//           onChange={(e) => setNewTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           value={newContent}
//           placeholder="Enter content for the memory"
//           onChange={(e) => setNewContent(e.target.value)}
//         />
//       </div>

//       <button className="add-btn" onClick={updateMemory}>
//          Memory
//       </button>
//     </div>
//   );
// };

// export default UpdateMemory;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Added useNavigate

const UpdateMemory = ({ memories, fetchMemories }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  // 1. Correct way to get the ID from the URL
  const { id } = useParams();
  const navigate = useNavigate();

  // 2. Optional: Pre-fill the inputs if the memory already exists in your 'memories' prop
  useEffect(() => {
    const memoryToEdit = memories.find((m) => m._id === id);
    if (memoryToEdit) {
      setNewTitle(memoryToEdit.title);
      setNewContent(memoryToEdit.content);
    }
  }, [id, memories]);

  const updateMemory = async () => {
    if (!newTitle || !newContent) {
      alert("Please fill in all fields");
      return;
    }

    try {
      // 3. Using the 'id' from useParams
      await axios.put(`http://localhost:3000/memories/${id}`, {
        title: newTitle,
        content: newContent,
      });

      setNewTitle("");
      setNewContent("");
      fetchMemories();

      // 4. Redirect back to the main list after updating
      navigate("/");
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div>
      <h1 className="Main-Heading text-2xl">Update Memory</h1>
      <div className="input-div">
        <input
          type="text"
          className="border p-2 m-2"
          value={newTitle}
          placeholder="Update title"
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          className="border p-2 m-2"
          value={newContent}
          placeholder="Update content"
          onChange={(e) => setNewContent(e.target.value)}
        />
      </div>

      <button
        className="add-btn bg-blue-500 text-white p-2"
        onClick={updateMemory}
      >
        Save Changes
      </button>
    </div>
  );
};

export default UpdateMemory;
