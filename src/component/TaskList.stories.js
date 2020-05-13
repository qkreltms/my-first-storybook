import React from 'react';

// redux와 연결된 컴포넌트가 아닌 연결되지 않은 presentational 컴포넌트를 가져옴
import { PureTaskList } from './TaskList';
import { taskData, actionsData } from './Task.stories';

export default {
  component: PureTaskList,
  title: 'TaskList',
  // 미들웨어 느낌 story가 실행되기 전에 어떤 기능을 추가할 수 있음   
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const defaultTasksData = [
  { ...taskData, id: '1', title: 'Task 1' },
  { ...taskData, id: '2', title: 'Task 2' },
  { ...taskData, id: '3', title: 'Task 3' },
  { ...taskData, id: '4', title: 'Task 4' },
  { ...taskData, id: '5', title: 'Task 5' },
  { ...taskData, id: '6', title: 'Task 6' },
];

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
];

export const Default = () => <PureTaskList tasks={defaultTasksData} {...actionsData} />;

export const WithPinnedTasks = () => <PureTaskList tasks={withPinnedTasksData} {...actionsData} />;

export const Loading = () => <PureTaskList loading tasks={[]} {...actionsData} />;

export const Empty = () => <PureTaskList tasks={[]} {...actionsData} />;