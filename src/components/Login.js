import React, { useState } from "react";
import FormData from "./FormData";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../utils/Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const { setAuthenticated, setError } = useAppContext();
  const handleClick = async () => {
    try {
      const token = await fetch("https://todoapp-3xjm.onrender.com/auth", {
        method: "POST",

        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (token.status === 200) {
        const data = await token.json();
        localStorage.setItem("jwt", data?.ascessToken);
        setAuthenticated(true);

        navigate("/main");
      } else {
        setAuthenticated(false);
        localStorage.clear();
        setErrorMessage("Invalid creditionals");
      }
    } catch (error) {
      setError(error.message);
      navigate("/error");
    }
  };
  return (
    <div>
      <div className="antialiased bg-gray-200 text-gray-900 font-sans">
        <div className="flex items-center h-screen w-full">
          <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <span className="block w-full text-xl uppercase font-bold mb-4">
              Login
            </span>
            {errorMessage && (
              <p className="text-xl text-red-500">{errorMessage}</p>
            )}

            <FormData
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
            <div className="flex flex-col">
              <button
                className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded w-[25%]"
                onClick={handleClick}
              >
                Login
              </button>
              <Link className="text-blue-700 text-sm mt-2" to="/register">
                New User? Register now
              </Link>
              <div className="text-sm">
                <span><span className="text-red-600">testUser : </span>test@gmail.com</span>
                <span className="p-2"><span className="text-red-600">password : </span>test</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
