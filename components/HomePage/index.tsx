import React, { useEffect, useState } from "react";
import {
  HomePageWrapper,
  HeaderTitle,
  TaskProfileWrapper,
  TaskProfileItem,
  CreateTaskProfileItem,
  ProfileText,
  CreateTaskIcon,
  ListIcon,
  ExitIcon,
} from "./HomeStyle";
import { Modal } from "@mantine/core";
import Link from "next/link";
import ProfileForm from "./ProfileForm";
import { useSelector } from "react-redux";
import { selectProfile } from "../../redux/reducers/profileSlice";

const HomePage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const profilesData = useSelector(selectProfile);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <HomePageWrapper>
      <HeaderTitle>Create Task Profile</HeaderTitle>
      <TaskProfileWrapper>
        <CreateTaskProfileItem onClick={() => setOpen(true)}>
          <CreateTaskIcon />
          <ProfileText>Create Profile</ProfileText>
        </CreateTaskProfileItem>
        {profilesData.map((item, index) => (
          <Link passHref key={index} href={`/${item.name}`}>
            <TaskProfileItem>
              <ListIcon />
              <ProfileText>{item.name}</ProfileText>
            </TaskProfileItem>
          </Link>
        ))}
      </TaskProfileWrapper>
      <Modal opened={open} onClose={closeModal} title="Create your task !">
        <ProfileForm close={closeModal} />
      </Modal>
    </HomePageWrapper>
  );
};

export default HomePage;
