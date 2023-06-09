import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 48px 146px 48px;

  @media screen and (max-width: 768px) {
    padding-bottom: 24px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
  max-width: 1760px;
  margin-top: 74px;
  margin-bottom: 24px;
`;

export const Link = styled(NavLink)`
  position: fixed;
  left: 48px;
  padding: 12px;
  border-radius: 10px;
  background-color: #647dc8;
  color: #ebd8ff;
  font-size: 18px;
  cursor: pointer;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3.5px 3.5px;

  :hover,
  :focus {
    background-color: #471ca9;
  }
`;
