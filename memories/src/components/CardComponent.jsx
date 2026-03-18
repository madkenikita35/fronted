import React from "react";

const CardComponent = ({ view }) => {
  return (
    <div>
      {view === "card" && (
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
      )}
    </div>
  );
};

export default CardComponent;
