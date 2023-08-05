import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  let time = new Date().toLocaleTimeString();
  const [t, setTime] = useState(time);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{t}</h1>
      <button onClick={updateTime}>GET TIME</button>
    </div>
  );
}

export default App;
