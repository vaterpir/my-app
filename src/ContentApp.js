import React from "react";
import { TaskDay } from "./TaskDay";
import "./ContentApp.css";

const getDay = (date) =>
  [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ].filter((day, index) => date.getDay() === index);

const tasks = [...new Array(7)].map((el, index) => {
  return <TaskDay day={getDay(new Date())} key={index} />;
});

export const ContentApp = () => {
  return <div className="ContentApp">
    {tasks}
    </div>;
};
