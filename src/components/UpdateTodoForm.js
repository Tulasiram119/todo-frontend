import React, { useState } from "react";
import { useAppContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";

const UpdateTodoForm = () => {
  const { note, setNote,setError } = useAppContext();
  const[errorMessage,setErrorMessage] = useState();
  const navigate = useNavigate();
  const handleClick = async () => {
    
    const id = note._id.toString();
    try {
      const data = await fetch(
        "https://todoapp-3xjm.onrender.com/todo/updateTodo/" + id,
        {
          method: "PUT",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            ...note,
          }),
        }
      );
      
      if (data.status === 200) {
        navigate("/main");
      }else{
        setErrorMessage("Required fields are missing")
      }
    } catch (error) {
      setError(error.message);
      navigate("/error");
    }
  };

  return (
    <div className="w-full">
      {errorMessage && <p className="text-2xl text-red-600">{errorMessage}</p>}
      <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-5">
        Update Todo
      </h2>
      <div className="bg-white p-5 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
        <div>
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block mb-2 font-bold text-gray-600"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="title"
              className="border border-gray-300 shadow p-3 w-full rounded mb-"
              required
              value={note.title}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="description"
              className="block mb-2 font-bold text-gray-600"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Description"
              className="border border-gray-300 shadow p-3 w-full rounded mb-2"
              required
              value={note.description}
              onChange={(e) =>
                setNote({ ...note, description: e.target.value })
              }
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="isCompleted"
              className="block mb-2 font-bold text-gray-600"
            >
              isCompleted
            </label>
            <select
              className="appearance-none w-full py-1 px-2 bg-white"
              name="whatever"
              id="frm-whatever"
              value={note.isCompelted}
              onChange={(e) =>
                setNote({ ...note, isCompelted: e.target.value })
              }
            >
              <option value="">---select----</option>
              <option value="true">yes</option>
              <option value="false">no</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="date"
              className="block mb-2 font-bold text-gray-600"
            >
              Last Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="deadline"
              className="border border-gray-300 shadow p-3 w-full rounded mb-"
              value={note.lastDate}
              onChange={(e) => setNote({ ...note, lastDate: e.target.value })}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="importance"
              className="block mb-2 font-bold text-gray-600"
            >
              Importance
            </label>
            <select
              className="appearance-none w-full py-1 px-2 bg-white"
              name="whatever"
              id="frm-whatever"
              value={note.importance}
              onChange={(e) => setNote({ ...note, importance: e.target.value })}
            >
              <option value="">---select----</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>

          <button
            className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTodoForm;
