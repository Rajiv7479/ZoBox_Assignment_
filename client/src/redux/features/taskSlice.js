import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000/todos";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {},
  reducers: {
    addTask: async (state, { type, payload }) => {
      try {
        await axios.post(baseUrl, { task: payload });
        // console.log(payload);
      } catch (err) {
        console.log(err, "data not sent to server!!!");
      }
    },
    deleteTask: async (state, { type, payload }) => {
      const id = payload._id;
      console.log(id);
      try {
        await axios.delete(`${baseUrl}/${id}`);
        console.log("task Deleted!!!");
      } catch (err) {
        console.log(err, "data not deleted!!!");
      }
    },
    editTask: async (state, { type, payload }) => {
      console.log(payload);
      const id = payload._id;
      try {
        await axios.put(`${baseUrl}/${id}`, { task: payload.task });
        console.log("Task Updated");
      } catch (err) {
        console.log(err, "Task not updated!!");
      }
    },
    copyTask: async (state, { type, payload }) => {
      console.log(payload);
      try {
        await axios.post(baseUrl, { task: payload });
        console.log("Copied!!!");
      } catch (err) {
        console.log(err, "Data not copied!");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, editTask, copyTask } = taskSlice.actions;

export default taskSlice.reducer;
