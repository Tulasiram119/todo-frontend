import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export default function AppContextProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [note, setNote] = useState("");
  const [todos, setTodos] = useState(null);
  const [filterTodos, setFilterTodos] = useState(null);
  const [error, setError] = useState(null);
  const getAllTodos = async () => {
    try {
      const data = await fetch(
        "https://todoapp-3xjm.onrender.com/todo/retriveAlltodos",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        }
      );
      const fetchTodos = await data.json();
      setTodos(fetchTodos.todos);
      setFilterTodos(fetchTodos.todos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        note,
        setNote,
        todos,
        setTodos,
        getAllTodos,
        filterTodos,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
