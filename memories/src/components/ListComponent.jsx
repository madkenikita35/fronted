import React from "react";

const ListComponent = ({ view }) => {
  return (
    <div>
      {view === "list" && (
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
      )}
    </div>
  );
};

export default ListComponent;
