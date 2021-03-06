import axios from "axios";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";
import { DecodeToken, ResponseApiLogin, UserLogin } from "../../types/types";
import {
  setLoadingOffActionCreator,
  setLoadingOnActionCreator,
} from "../features/uiSlice";

import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

export const loginThunk =
  (userData: UserLogin) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;

    try {
      dispatch(setLoadingOnActionCreator());
      const {
        data: { token },
      }: ResponseApiLogin = await axios.post(`${url}user/login`, userData);
      if (token) {
        const { username, image, imageBackup, id }: DecodeToken =
          jwtDecode(token);

        const userInfo = {
          id,
          username,
          image,
          imageBackup,
        };
        dispatch(loginActionCreator(userInfo));
        localStorage.setItem("token", token);
        dispatch(setLoadingOffActionCreator());
        toast.success("Successfully logged In");
      }
    } catch (error: any) {
      dispatch(setLoadingOffActionCreator());
      toast.error("Wrong username or password");
      return error.message;
    }
  };

export const registerThunk =
  (userData: any, password: string) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;

    try {
      dispatch(setLoadingOnActionCreator());

      const { data } = await axios.post(`${url}user/register`, userData);

      dispatch(setLoadingOffActionCreator());

      const newUser = {
        username: data.new_user.username,
        password: password,
      };

      dispatch(loginThunk(newUser));
    } catch (error: any) {
      dispatch(setLoadingOffActionCreator());
      toast.error("Something went wrong");
      return error.message;
    }
  };
