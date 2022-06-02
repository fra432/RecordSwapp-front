import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Controller from "./components/Controller/Controller";
import jwtDecode from "jwt-decode";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { loginActionCreator, State } from "./redux/features/userSlice";
import AccessFormPage from "./pages/AccessFormPage";
import { Toaster } from "react-hot-toast";
import { DecodeToken } from "./types/types";
import User from "./components/User/User";

function App() {
  const dispatch = useAppDispatch();
  const { logged } = useAppSelector((state: { user: State }) => state.user);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token as string) {
      const { username, image }: DecodeToken = jwtDecode(token as string);
      dispatch(loginActionCreator({ username, image }));
      navigate("/users/collections");
    }
  }, [dispatch, logged, navigate, token]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
      {logged && <Navigation />}
      <Routes>
        <Route path="/" element={<Navigate to="/user/login" />} />
        <Route path="/user/login" element={<AccessFormPage />} />
        <Route path="/user/:register" element={<AccessFormPage />} />
        <Route
          path="/users/collections"
          element={
            <Controller>
              <User />
            </Controller>
          }
        />
      </Routes>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default App;
