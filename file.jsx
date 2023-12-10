import React, { useState, useEffect } from 'react';

export default function PriorityLevels() {
  const [priority, setPriority] = useState(0);

  useEffect(() => {
    localStorage.setItem("priority", JSON.stringify(priority));
  }, [priority]);

  useEffect(() => {
    const savedPriority = JSON.parse(localStorage.getItem("priority"));
    if (savedPriority) {
      setPriority(savedPriority);
    }
  }, []);

  return (
    <div>
      <div className="flex">
        <button className={`priority-btn ${priority === 4 && "active"}`} onClick={() => setPriority(4)}>Urgent</button>
        <button className={`priority-btn ${priority === 3 && "active"}`} onClick={() => setPriority(3)}>High</button>
        <button className={`priority-btn ${priority === 2 && "active"}`} onClick={() => setPriority(2)}>Medium</button>
        <button className={`priority-btn ${priority === 1 && "active"}`} onClick={() => setPriority(1)}>Low</button>
        <button className={`priority-btn ${priority === 0 && "active"}`} onClick={() => setPriority(0)}>No priority</button>
      </div>
    </div>
  );
}