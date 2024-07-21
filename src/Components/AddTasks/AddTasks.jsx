import React, { useEffect, useState } from "react";
import "./AddTasks.css";

export default function AddTasks() {
  const [numOfTasks, setNumOfTasks] = useState(0);
  const handleNumOfTasks = (event) => {
    setNumOfTasks(+event.target.value);
  };

  const tasks = () => {
    {
      Array.from(Array(numOfTasks), (e, i) => {
        return (
          <div className="form-task flex items-center mb-5 justify-center">
            <span className="form-task-num">1</span>
            <div>
              <input
                className="shadow appearance-none rounded w-full bg-gray-200 py-3 px-4 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                id="task_name"
                type="text"
                placeholder="Add Task Name"
              />
            </div>
            <div>
              <input
                className="shadow appearance-none rounded w-full bg-gray-200 py-3 px-4 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                id="task-image"
                type="file"
              />
            </div>
          </div>
        );
      });
    }
  };
  return (
    <>
      <div className="AddTasks bg-gray-300 p-5">
        <h1 className="text-center font-extrabold text-2xl mb-3"> Add Tasks</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="form-container md:columns-2 mb-4">
            <div className="px-3 py-3 md:py-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Choose Room:
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Room 1</option>
                <option>Room 2</option>
                <option>Room 3</option>
                <option>Room 4</option>
                <option>Room 5</option>
                <option>Room 6</option>
                <option>Room 7</option>
              </select>
            </div>
            <div className=" px-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="number"
              >
                Add Number Of Tasks:
              </label>
              <input
                className=" appearance-none rounded w-full bg-gray-200 border-gray-200 py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="number"
                type="number"
                min="1"
                placeholder="Add Number Of Tasks"
                onInput={handleNumOfTasks}
              />
            </div>
          </div>
          <h1 className="text-3xl mb-4 text-center">Tasks</h1>
          <div className="form-tasks-container">{tasks()}</div>
        </form>
      </div>
    </>
  );
}
