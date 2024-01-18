import React, { useState } from "react";
import FormData from "./FormData";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../utils/Context";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const {setError} = useAppContext();
  const handleClick = async () => {
    try {
      const token = await fetch("https://todoapp-3xjm.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password, username }),
      });
      
      if (token.status === 201) {
        navigate("/login");
      } else {
        setErrorMessage("Required fields are missing");
      }
    } catch (error) {
      setError(error.message);
      navigate("/error")
      
    }
  };
  return (
    <div>
      <div className="antialiased bg-gray-200 text-gray-900 font-sans">
        <div className="flex items-center h-screen w-full">
          <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <span className="block w-full text-xl uppercase font-bold mb-4">
              Register
            </span>
            {errorMessage && (
              <p className="text-xl text-red-500">{errorMessage}</p>
            )}
            <div className="mb-6 md:w-full">
              <label htmlFor="username" className="block text-xs mb-1">
                Username
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <FormData
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
            <div className="flex flex-col">
              <button
                className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-2 py-2 rounded w-[30%]"
                onClick={handleClick}
              >
                Register
              </button>
              <Link className="text-blue-700 text-sm mt-2" to="/login">
                OldUser User? Login now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
