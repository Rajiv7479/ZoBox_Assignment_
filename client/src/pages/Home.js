import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTask } from "../redux/features/taskSlice";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <TaskCard />
    </div>
  );
};

export default Home;
