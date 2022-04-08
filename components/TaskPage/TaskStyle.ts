import styled from "styled-components";
import { device } from "../../helper/mediaQuery";
import { BsFillXSquareFill } from "react-icons/bs";
import { Container } from "@mantine/core";
import { BiArrowBack } from "react-icons/bi";

export const ProfileWrapper = styled(Container)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
  padding: 7rem 0;
  // gradient text
  background-color: #f3ec78;
  background-image: linear-gradient(45deg, #f3ec78, #af4261);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  @media ${device.mobileXL} {
    font-size: 32px;
    padding: 5rem 0;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;
`;

export const TaskItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const TaskItem = styled.div`
  background-color: #3a3845;
  padding: 1rem 2rem;
  border-radius: 1rem;
  width: 400px;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media ${device.mobileXL} {
    width: 280px;
  }
`;

export const TaskDetail = styled.p`
  color: white;
  flex-grow: 1;
`;

export const ExitIcon = styled(BsFillXSquareFill)`
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

export const BackIcon = styled(BiArrowBack)`
  color: #af4261;
  font-size: 40px;
  margin-right: 2rem;
  cursor: pointer;
`;
