import React, { useState } from "react";

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  const [controller, setController] = useState(state);

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
