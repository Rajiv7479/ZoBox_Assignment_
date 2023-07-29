import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/features/taskSlice";

const InputSpace = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  // console.log(task);
  return (
    <div className="inputspace">
      <input
        className="input"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <div
        className="btn"
        onClick={() => {
          dispatch(addTask(task));
          setTask("");
        }}
      >
        Add Task
      </div>
    </div>
  );
};

export default InputSpace;
