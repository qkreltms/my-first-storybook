import React from "react";
import { action } from "@storybook/addon-actions";

import Task from "./Task";
import TaskClassComponent from "./Task-ClassComponent";

export default {
  // 대표적으로 보여줄 컴포넌트 Optional
  component: Task,
  title: "Task",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: "1",
  title: "Test Task",
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

// acion 함수는 미들웨어 같은 느낌 해당 함수가 발동되면 onPinTask를 storybook log에 찍어줌, value는 인자값
export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};

// Task 컴포넌트 하나의 여러가지 상태에 대해서 작성

export const Default = () => <Task task={{ ...taskData, state: "TASK_INBOX" }} {...actionsData} />;

export const Pinned = () => <Task task={{ ...taskData, state: "TASK_PINNED" }} {...actionsData} />;

export const Archived = () => <TaskClassComponent task={{ ...taskData, state: "TASK_ARCHIVED" }} {...actionsData} />;
