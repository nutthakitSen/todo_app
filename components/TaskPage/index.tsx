import React from "react";
import { useRouter } from "next/router";
import { TextInput, Button, Checkbox } from "@mantine/core";
import { useForm } from "@mantine/form";
import { v4 as uuid } from "uuid";
import {
  HeaderTitle,
  ProfileWrapper,
  TaskItemWrapper,
  FormWrapper,
  BackIcon,
  HeaderWrapper,
} from "./TaskStyle";
import { selectTask, createTask } from "../../redux/reducers/taskSlice";
import { useSelector, useDispatch } from "react-redux";
import TaskItemComponent from "./TaskItem";

const ProfilePage = () => {
  const router = useRouter();
  const { task } = router.query;
  const dispatch = useDispatch();
  const taskData = useSelector(selectTask);
  const completedTask = taskData.filter((task) => task.completed === true);
  const form = useForm({
    initialValues: {
      id: uuid(),
      detail: "",
      completed: false,
    },
  });

  const handleSubmit = (value: any) => {
    dispatch(createTask(value));
    form.reset();
  };

  return (
    <ProfileWrapper>
      <HeaderWrapper>
        <BackIcon onClick={() => router.back()} />
        <HeaderTitle>{task}</HeaderTitle>
      </HeaderWrapper>
      <FormWrapper onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          placeholder="create task !"
          {...form.getInputProps("detail")}
        />
        <Button type="submit">Submit</Button>
      </FormWrapper>
      <TaskItemWrapper>
        {taskData.map((item, index) => (
          <TaskItemComponent
            key={index}
            id={item.id}
            detail={item.detail}
            completed={item.completed}
          />
        ))}
        <div>{completedTask.length}</div>
      </TaskItemWrapper>
    </ProfileWrapper>
  );
};

export default ProfilePage;
