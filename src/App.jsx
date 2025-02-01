import { useState, useEffect } from "react";

function App() {
  const [quot, setQout] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchquotes = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) throw new Error("Failed to fetch quotes");

      const data = await response.json();
      console.log("Fetched Data:", data);

      setQout(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchquotes();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h1>Quote of the Day</h1>
      {quot && <p>{quot.slip?.advice}</p>}
      <button onClick={fetchquotes}>New Quote</button>
    </div>
  );
}

export default App;
