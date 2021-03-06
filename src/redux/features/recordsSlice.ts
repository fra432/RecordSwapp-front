import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecord } from "../../types/types";

const initialState: IRecord[] = [];

const recordsSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    loadRecords: (records, action: PayloadAction<IRecord[]>) => [
      ...action.payload,
    ],
    addRecord: (records, action: PayloadAction<IRecord>) => [
      ...records,
      action.payload,
    ],
    deleteRecord: (records, action: PayloadAction<string>) =>
      records.filter((record) => record.id !== action.payload),

    editRecord: (records, action) =>
      records.map((record) =>
        record.id === action.payload.id ? action.payload : record
      ),
  },
});

export const {
  loadRecords: loadRecordsActionCreator,
  addRecord: addRecordActionCreator,
  deleteRecord: deleteRecordActionCreator,
  editRecord: editRecordActionCreator,
} = recordsSlice.actions;

export default recordsSlice.reducer;
