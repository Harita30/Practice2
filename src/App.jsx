import { useState } from "react";

function App() {
  //quote display
  //button
  //quote array containing quote and id
  //function to update quote id based on user input
  const quot = [
    { id: 1, text: "abc" },
    { id: 2, text: "def" },
  ];

  const [index, setIndex] = useState(0);

  const upd = () => setIndex((index + 1) % quot.length);

  return (
    <div>
      <h1>Quote of the day</h1>
      <p>{quot[index].text}</p>
      <button onClick={upd}>New Quote</button>
    </div>
  );
}
export default App;
