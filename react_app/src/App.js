import "./App.css";
import "./assets/styles.css";

import { useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskEdit from "./components/TaskEdit";

function App() {
  const [tasks, setTasks] = useState([
    {
      desc: "Learn React",
      id: 1,
      date: "2021-01-03",
      complete: false,
    },
    {
      desc: "Profit",
      id: 2,
      date: "2021-01-05",
      complete: false,
    },
  ]);

  export const createContract = async (formDetails) => {
  const url = config.getApiUrl({ endpoint: "contracts_new" });
  const headers = {
    Authorization: Cookies.get(config.MRN_JWT_COOKIE),
  };

  const response = await axios.post(url, formDetails, { headers })
    .then((res) => ({ data: res.data }))
    .catch((error) => ({ data: error, hasError: true }));
  return response;
};

export const editContract = async (formDetails, pathParams) => {
  const url = config.getApiUrl({ endpoint: "contract_edit", pathParams });
  const headers = {
    Authorization: Cookies.get(config.MRN_JWT_COOKIE),
  };
  const response = await axios.put(url, formDetails, { headers })
    .then((res) => ({ data: res.data }))
    .catch((error) => ({ data: error, hasError: true }));
  return response;
};

  const onTglStatus = (task) => {
    console.log("completing task");
    setTasks(
      tasks.map((chkTask) => {
        chkTask.complete =
          task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
        return chkTask;
      })
    );
  };

  const [showTaskEdit, setShowTaskEdit] = useState(false);

  const onSaveTask = ({ desc, date }) => {
    console.log("saving tasks");
    setTasks([
      { desc: desc, date: date, id: Date.now(), complete: false },
      ...tasks,
    ]);
  };

  return (
    <div className="App">
      <Header></Header>

      <div className="container">
        <div className="col-12 text-right">
          <button
            className="button outline"
            onClick={() => setShowTaskEdit(!showTaskEdit)}>
            {!showTaskEdit && "New"}
            {showTaskEdit && "➖"}
          </button>
        </div>
        {showTaskEdit && <TaskEdit task={{}} onSaveTask={onSaveTask} />}
        <Tasks tasks={tasks} onTglStatus={onTglStatus}></Tasks>
      </div>
    </div>
  );
}

export default App;
