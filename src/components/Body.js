import React from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import MainPage from "./MainPage";
import NewTodoForm from "./NewTodoForm";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UpdateTodoForm from "./UpdateTodoForm";
import { useAppContext } from "../utils/Context";
import Logout from "./Logout";
import Error from "./error/Error";

const Body = () => {
  const { authenticated } = useAppContext();
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/login"
          element={authenticated === false ? <Login /> : <MainPage />}
        />
        <Route
          path="/"
          element={authenticated === false ? <Login /> : <MainPage />}
        />
        <Route
          path="/register"
          element={authenticated === false ? <Register /> : <MainPage />}
        />
        <Route
          path="/main"
          element={
            <AuthenticatedRoute>
              <MainPage />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/addTodo"
          element={
            <AuthenticatedRoute>
              <NewTodoForm />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/updateTodo"
          element={
            <AuthenticatedRoute>
              <UpdateTodoForm />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/logout"
          element={
            <AuthenticatedRoute>
              <Logout />
            </AuthenticatedRoute>
          }
        />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Body;
