import React from "react";

// class component 로 만든 Task 컴포넌트
export default class TaskClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { controller: this.props.task.state };
  }

  static defaultProps = {
    task: {
      id: "0",
      title: "title",
      updatedAt: new Date(),
      state: "TASK_INBOX",
    },
    onArchiveTask: (a, b) => null,
    onPinTask: (id) => null
  };

  setController = (controller) => {
    this.setState({
      controller,
    });
  };

  render() {
    const {
      onArchiveTask,
      onPinTask,
      task: { id, title },
    } = this.props;
    const { controller } = this.state;
    const { setController } = this;

    return (
      <div className={`list-item ${controller}`}>
        <label className="checkbox">
          <input type="checkbox" checked={controller === "TASK_ARCHIVED"} disabled={true} name="checked" />
          <span
            className="checkbox-custom"
            onClick={() => {
              controller === "TASK_ARCHIVED" ? setController("TASK_INBOX") : setController("TASK_ARCHIVED");
              onArchiveTask(id, "두번째 인자값이 로그에 찍혀야한다.");
            }}
          />
        </label>
        <div className="title">
          <input type="text" value={title} readOnly={true} placeholder="Input title" />
        </div>

        <div className="actions" onClick={(event) => event.stopPropagation()}>
          {controller !== "TASK_ARCHIVED" && (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              onClick={() => {
                controller === "TASK_PINNED" ? setController("TASK_INBOX") : setController("TASK_PINNED");
                onPinTask(id);
              }}
            >
              <span className={`icon-star`} />
            </a>
          )}
        </div>
      </div>
    );
  }
}
