import { Checkbox } from "@mantine/core";
import React from "react";
import { TaskItem, TaskDetail, ExitIcon } from "./TaskStyle";
import { updateCompleteTask, deleteTask } from "../../redux/reducers/taskSlice";
import { useDispatch } from "react-redux";

interface Props {
  id: string;
  completed: boolean;
  detail: string;
}

const TaskItemComponent: React.FC<Props> = ({ id, completed, detail }) => {
  const dispatch = useDispatch();

  const handleCompleteChange = () => {
    dispatch(updateCompleteTask({ id: id, completed: !completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTask({ id: id }));
  };

  return (
    <TaskItem>
      <Checkbox checked={completed} onChange={handleCompleteChange} />
      <TaskDetail>{detail}</TaskDetail>
      <ExitIcon onClick={handleDelete} />
    </TaskItem>
  );
};

export default TaskItemComponent;
