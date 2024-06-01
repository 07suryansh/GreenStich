import React, { useEffect, useState } from "react";
import "./card.css";
import PendingTile from "./PendingTile";
import Task from "./Task";
import axios from "axios";

export default function Pending(props) {
  const [taskRes, setTaskRes] = useState([]);
  // const [submit, setSubmit] = useState(false);
  const getTask = async () => {
    try {
      const response = await axios.get("http://localhost:3001/");
      console.log("frontend pending response-> " + response.data);
      const pendingTasks = response.data.filter(
        (task) => task.taskType === "pending"
      );
      setTaskRes(pendingTasks);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("taskRes-> " + taskRes);
  useEffect(() => {
    console.log("useeffect");
    getTask();
  }, [props.submit]);
  async function handleClick(id) {
    try {
      const response = await axios.post("http://localhost:3001/start/", { id });
      console.log("successfully start");
      props.setSubmit(prev=>!prev)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="card">
      <div className="title">
        Pending Task
      </div>
      <Task setSubmit={props.setSubmit} submit={props.submit} />
      <div className="content">
        {taskRes?.map((item) => (
          <PendingTile
            id={item._id}
            title={item.title}
            description={item.description}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}
