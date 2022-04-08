import styled from "styled-components";
import { FaPlusCircle, FaClipboardList } from "react-icons/fa";
import { device } from "../../helper/mediaQuery";
import { BsFillXSquareFill } from "react-icons/bs";

export const HomePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const TaskProfileWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2rem;
  @media ${device.mobileXL} {
    grid-template-columns: 1fr;
  }
`;

export const CreateTaskProfileItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  padding: 3rem 1rem;
  border: 2px solid #ff6b6b;
  border-radius: 1rem;
  @media ${device.mobileXL} {
    padding: 2rem 1rem;
  }
`;

export const TaskProfileItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  background-color: #ff6b6b;
  padding: 3rem 1rem;
  border: 2px solid #ff6b6b;
  border-radius: 1rem;
  @media ${device.mobileXL} {
    padding: 2rem 1rem;
  }
`;

export const ProfileText = styled.p`
  font-size: 42px;
  @media ${device.mobileXL} {
    font-size: 32px;
  }
`;

export const CreateTaskIcon = styled(FaPlusCircle)`
  color: white;
  font-size: 48px;
`;

export const ListIcon = styled(FaClipboardList)`
  color: white;
  font-size: 48px;
`;

export const ExitIcon = styled(BsFillXSquareFill)`
  color: white;
  font-size: 32px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
