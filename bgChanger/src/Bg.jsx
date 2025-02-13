import React, { useState } from "react";

function Bg({}) {
  const [bg, setBg] = useState("bg-blue-500");
  const [btnBg, setbtnBg] = useState("bg-blue-300");

  return (
    <div
      className={`${bg} h-screen flex justify-center items-center text-3xl text-white flex-col duration-900`}
    >
      <h2 className="text-3xl text-black font-bold italic">B.G. Changer</h2>
      <div
        className={`${btnBg} duration-700 flex flex-wrap rounded-2xl m-2 bottom-4 fixed`}
      >
        <button
          onClick={() => {
            setBg("bg-red-500");
            setbtnBg("bg-red-300");
          }}
          className="bg-red-500 w-24 p-1 m-2 rounded-2xl text-black  hover:bg-red-400 shadow-2xl"
        >
          Red
        </button>
        <button
          onClick={() => {
            setBg("bg-green-500");
            setbtnBg("bg-green-300");
          }}
          className="bg-green-500 w-24 p-1 m-2 rounded-2xl text-black  hover:bg-green-400"
        >
          Green
        </button>
        <button
          onClick={() => {
            setBg("bg-gray-500");
            setbtnBg("bg-gray-300");
          }}
          className="bg-gray-500 w-24 p-1 m-2 rounded-2xl text-black hover:bg-gray-400"
        >
          Gray
        </button>
      </div>
    </div>
  );
}

export default Bg;
