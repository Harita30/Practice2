import { useState } from "react";

function App() {
  //quote display
  //button
  //quote array containing quote and id
  //function to update quote id based on user input
  /*const quot = [
    { id: 1, text: "abc" },
    { id: 2, text: "def" },
  ];*/
  const [quot, setQout] = useState([]);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchquotes = async () => {
      try {
        const response = await fetch("https://api.quotable.io/quotes?limit=10");
        if (!response.ok) throw new Error("Failed to fetch quotes");

        const data = await response.json;
        setQout(data.results);
      } catch (err) {
        setError(err.data);
      } finally {
        setLoading(false);
      }
    };
    fetchquotes();
  }, []);

  const upd = () => setIndex((index + 1) % quot.length);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Quote of the day</h1>
      {quot.length > 0 && <p>{quot[index].content}</p>}
      <button onClick={upd}>New Quote</button>
    </div>
  );
}
export default App;
