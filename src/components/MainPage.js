import React, { useEffect } from "react";
import ImportanceDropdown from "./ImportanceDropdown";
import IsCompletedDropdown from "./IsCompletedDropdown";
import TodoCard from "./TodoCard";
import AddTodo from "./AddTodo";
import { useAppContext } from "../utils/Context";

const MainPage = () => {
  const { todos, setTodos, getAllTodos } = useAppContext();
  useEffect(() => {
    getAllTodos();
  }, []);
  return (
    <div>
      <div className="flex flex-row md:gap-8">
        <ImportanceDropdown />
        <IsCompletedDropdown />
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1">
        
        {todos &&
          todos?.map((todo) => (
            <TodoCard
              key={todo._id}
              todo={todo}
              setTodos={setTodos}
              todos={todos}
            />
          ))}
        <AddTodo />
      </div>
    </div>
  );
};

export default MainPage;
