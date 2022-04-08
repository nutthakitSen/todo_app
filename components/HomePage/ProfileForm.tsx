import React from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button } from "@mantine/core";
import { FormWrapper } from "./HomeStyle";
import { useDispatch } from "react-redux";
import { createProfile } from "../../redux/reducers/profileSlice";

interface Props {
  close: () => void;
}

const ProfileForm: React.FC<Props> = ({ close }) => {
  const form = useForm({
    initialValues: {
      name: "",
    },
  });
  const dispatch = useDispatch();
  const handleSubmit = (values: any) => {
    dispatch(createProfile(values));
    form.reset();
    close();
  };

  return (
    <FormWrapper onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        required
        label="Task profile name"
        placeholder="name your profile"
        {...form.getInputProps("name")}
      />
      <Button type="submit">Submit</Button>
    </FormWrapper>
  );
};

export default ProfileForm;
