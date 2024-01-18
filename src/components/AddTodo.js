import React from "react";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const navigate = useNavigate();
  return (
    <button
      className="border border-black m-1 p-2 shadow-md rounded-md bg-green-200"
      onClick={() => navigate("/addTodo")}
    >
      Create new Todo
    </button>
  );
};

export default AddTodo;
