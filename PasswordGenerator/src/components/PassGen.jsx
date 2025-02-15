import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";

function PassGen() {
  const [length, setLength] = useState(13);
  const [password, setpassword] = useState("pass");
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [btnValue, setBtnValue] = useState("Copy");

  const colorizeText = (word = "") => {
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()";

    return word.split("").map((c, index) => {
      if (numbers.includes(c)) {
        return (
          <span key={index} style={{ color: "red" }}>
            {c}
          </span>
        );
      } else if (symbols.includes(c)) {
        return (
          <span key={index} style={{ color: "blue" }}>
            {c}
          </span>
        );
      } else {
        return <span key={index}>{c}</span>; // Keep default color
      }
    });
  };

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (charAllowed) str += "!@#$%^&*()";
    if (numberAllowed) str += "1234567890";
    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [charAllowed, numberAllowed, length]);

  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numberAllowed]);

  const selectPassword = () => {
    window.navigator.clipboard.writeText(password);

    setIsSelected(true);
    setBtnValue("Copied!");
    setTimeout(() => {
      setIsSelected(false);
      setBtnValue("Copy");
    }, 1000);
  };

  return (
    <>
      <div className=" px-20 h-120 my-40 rounded-2xl flex flex-col justify-center bg-blue-100 max-w-200 mx-auto min-w-200 shadow-2xl border">
        <div className=" flex flex-col w-full">
          <h1 className="text-4xl text-center mb-8 font-serif font-bold">
            Password Generator
          </h1>

          <div className="grid grid-cols-2 w-full">
            <div className="">
              <div className="w-100 ">
                <h1
                  className={`p-2 m-2 w-75 ${
                    isSelected
                      ? "text-blue-500 bg-gray-200"
                      : "text-black bg-white"
                  } `}
                >
                  {colorizeText(password)}
                </h1>
                <button
                  onClick={selectPassword}
                  className="bg-blue-500 m-2 p-2 w-75 hover:bg-blue-600 text-white"
                >
                  {btnValue}
                </button>
              </div>
            </div>

            <div className=" p-5 flex justify-center mx-auto flex-col text-xl ">
              <div>
                <input
                  type="range"
                  min={6}
                  max={30}
                  value={length}
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                />
                <label className="mx-4" htmlFor="length">
                  {length}
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked={numberAllowed}
                  onChange={() => {
                    console.log("char changed");
                    setCharAllowed((prev) => !prev);
                  }}
                />
                <label className="mx-4" htmlFor="">
                  Characters Allowed
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked={numberAllowed}
                  onChange={() => {
                    console.log("number changed");
                    setNumberAllowed((prev) => !prev);
                  }}
                />
                <label className="mx-4" htmlFor="">
                  Number Allowed{" "}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PassGen;
