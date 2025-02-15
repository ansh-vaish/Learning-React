import { useState } from "react";

function App() {
  const [word, setWord] = useState("");

  const colorizeText = (word = "") => {
    const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()";

    return word.split("").map((c, index) => {
      if (alpha.includes(c)) {
        return (
          <span key={index} style={{ color: "red" }}>
            {c}
          </span>
        );
      } else if (numbers.includes(c)) {
        return (
          <span key={index} style={{ color: "blue" }}>
            {c}
          </span>
        );
      } else if (symbols.includes(c)) {
        return (
          <span key={index} style={{ color: "green" }}>
            {c}
          </span>
        );
      } else {
        return <span key={index}>{c}</span>; // Keep default color
      }
    });
  };

  return (
    <div className="flex justify-center items-center h-lvh">
      <input
        type="text"
        className="bg-blue-300 text-white p-2"
        onChange={(e) => setWord(e.target.value)}
      />
      <h1>{colorizeText(word)}</h1>
    </div>
  );
}

export default App;
