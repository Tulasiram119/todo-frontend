import React from "react";
import { useAppContext } from "../utils/Context";

const ImportanceDropdown = () => {
  const { setTodos, filterTodos } = useAppContext();

  const handleChange = (e) => {
    let value = e.target.value;
    if (value === "") {
      setTodos(filterTodos);
      return;
    }
    setTodos(filterTodos.filter((todo) => todo.importance === value));
  };
  return (
    <form className="p-2 md:w-[10%] w-[36%]">
      <fieldset>
        <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
          <label htmlFor="frm-whatever" className="sr-only">
            My field
          </label>
          <select
            className="appearance-none w-full py-1 px-2 bg-white"
            name="whatever"
            id="frm-whatever"
            onChange={(e) => handleChange(e)}
          >
            <option value="">Importance</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default ImportanceDropdown;
