import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../utils/Context";

const TodoCard = ({ todo, setTodos, todos, setFilterTodos }) => {
  const { setNote, setError } = useAppContext();
  const navigate = useNavigate();
  const { title, description, lastDate, importance, isCompelted } = todo;
  const handleDelete = async () => {
    try {
      const id = todo._id.toString();
      const data = await fetch(
        "https://todoapp-3xjm.onrender.com/todo/deleteTodo/" + id,
        {
          method: "DELETE",

          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        }
      );

      if (data.status === 200) {
        setTodos(todos.filter((td) => td._id !== todo._id));
        setFilterTodos(todos.filter((td) => td._id !== todo._id));
      }
    } catch (error) {
      setError(error.message);
      navigate("/error");
    }
  };
  const handleUpdate = () => {
    setNote(todo);
    navigate("/updateTodo");
  };
  return (
    <div className="border border-black m-1 p-2 shadow-md rounded-md">
      <h1 className="font-bold pd-2">{title}</h1>
      <p>{description}</p>
      <p>Task importance {importance}</p>
      <p>isCompleted: {isCompelted.toString()}</p>
      <p className="font-thin py-1">
        Last Date: {new Date(lastDate).toLocaleDateString()}
      </p>
      <div className="flex flex-row gap-2">
        <span
          className="bg-green-300 rounded-md px-2 cursor-pointer"
          onClick={handleUpdate}
        >
          edit
        </span>
        <span
          className="bg-red-500 rounded-md px-2 cursor-pointer"
          onClick={handleDelete}
        >
          delete
        </span>
      </div>
    </div>
  );
};

export default TodoCard;
