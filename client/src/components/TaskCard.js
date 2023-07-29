import React, { useEffect, useState } from "react";
import Task from "./Task";
import InputSpace from "./InputSpace";
import "./style.css";
import axios from "axios";

const initialState = [
  // {
  //   id: 1,
  //   task: "I have to do this work.dfsejfewf eiufgwaef weadaew bdahdewawhebawjc ndcejkdn,mdsdasdahd qw wd aewe wd ekrnewr ejnbwa dwhmdadj jeewddfnmffskjwew, memsf",
  // },
  // {
  //   id: 2,
  //   task: "Today we have to finish DSA",
  // },
];

const baseUrl = "http://localhost:5000/todos";

const TaskCard = () => {
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(baseUrl);
      setTasks(data.data);
    };
    fetchData();
  }, [tasks]);
  return (
    <div>
      <div className="card">
        <div className="inputSpace">
          <InputSpace />
        </div>
        <div className="heading">All Tasks</div>
        <div className="heading-underline"></div>

        {tasks &&
          tasks.map((task) => {
            return (
              <div key={task._id} className="taskList">
                <Task data={task} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TaskCard;
