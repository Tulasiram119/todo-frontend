import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../utils/Context";

const NewTodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompelted, setisCompelted] = useState();
  const [lastDate, setLastDate] = useState(Date.now);
  const [importance, setImportance] = useState("A");
  const navigate = useNavigate();
  const { setError } = useAppContext();
  const handleClick = async () => {
    try {
      const data = await fetch(
        "https://todoapp-3xjm.onrender.com/todo/createTodo",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            isCompelted,
            lastDate,
            importance,
          }),
        }
      );
      if (data.status === 201) {
        navigate("/main");
      }
    } catch (error) {
      setError(error.message);
      navigate("/error");
    }
  };
  return (
    <div className="w-full">
      <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-5">
        Add new Todo
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              className="border border-gray-300 shadow p-3 w-full rounded mb-"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              value={isCompelted}
              onChange={(e) => setisCompelted(e.target.value)}
            >
              <option value="">---select----</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
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
              value={lastDate}
              onChange={(e) => setLastDate(e.target.value)}
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
              value={importance}
              onChange={(e) => setImportance(e.target.value)}
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

export default NewTodoForm;
