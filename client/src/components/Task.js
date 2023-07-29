import React, { useState } from "react";
import { deleteTask, editTask, copyTask } from "../redux/features/taskSlice";
import { useDispatch, useSelector } from "react-redux";

const Task = ({ data }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(0);
  const [newTask, setNewTask] = useState(data.task);
  return (
    <div className="task">
      {edit == 0 ? (
        <div className="taskDesc">{data.task}</div>
      ) : (
        <input
          className="input"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
      )}
      <div className="buttons">
        {/* Copy Button */}
        <div
          className="btn1 copy-btn"
          onClick={() => {
            dispatch(copyTask(data.task));
            console.log(data.task);
          }}
        >
          Copy
        </div>

        {/* Edit Button */}
        {edit == 0 ? (
          <div
            className="btn1 edit-btn"
            onClick={() => {
              setEdit(1);
            }}
          >
            Edit
          </div>
        ) : (
          <div
            className="btn1 edit-btn"
            onClick={() => {
              data.task = newTask;
              dispatch(editTask(data));
              console.log(data.task);
              setEdit(0);
            }}
          >
            Save
          </div>
        )}

        {/* Delete Button */}
        <div
          className="btn1 delete-btn"
          onClick={() => {
            dispatch(deleteTask(data));
            console.log(data.task);
          }}
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default Task;
