import axios from "axios";
import toast from "react-hot-toast";
import { IRecord } from "../../types/types";
import {
  addRecordActionCreator,
  loadRecordsActionCreator,
} from "../features/recordsSlice";
import { AppDispatch } from "../store/store";

const url = process.env.REACT_APP_API_URL;

export const loadMyRecordsThunk =
  (token: string) => async (dispatch: AppDispatch) => {
    try {
      const {
        data: { records },
      } = await axios.get(`${url}myCollection`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const dataRecords = records.map((record: IRecord) => ({
        ...record,
        image: record.image ? `${url}${record.image}` : "",
      }));

      dispatch(loadRecordsActionCreator(dataRecords));
    } catch (error: any) {
      return error.message;
    }
  };

export const addRecordThunk =
  (recordData: any) => async (dispatch: AppDispatch) => {
    try {
      toast.loading("Loading...");
      const {
        data: { new_record },
      } = await axios.post(`${url}myCollection`, recordData, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      if (new_record) {
        dispatch(addRecordActionCreator(new_record));
        toast.dismiss();
        toast.success("Record succesfully added to your collection");
      }
    } catch (error: any) {
      return error.message;
    }
  };