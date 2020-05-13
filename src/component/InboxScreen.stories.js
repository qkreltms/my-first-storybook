import React from "react";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";

import { PureInboxScreen } from "./InboxScreen";
import { defaultTasksData } from "./TaskList.stories";

export default {
  component: PureInboxScreen,
  title: "InboxScreen",
  // story가 실행되기 전 Provider로 store 주입
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

// PureInboxScreen 안의 TaskList가 redux에 붙어있으므로 가짜 store를 만들어 주입한다.
// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
      tasks: defaultTasksData,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export const Default = () => <PureInboxScreen />;

export const Error = () => <PureInboxScreen error="Something" />;
