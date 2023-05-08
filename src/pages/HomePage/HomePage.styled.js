import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 60vh;
  margin-top: 48px;
  padding: 48px;
  color: #373737;

  @media screen and (max-width: 768px) {
    width: 440px;
    padding-right: 100px;
  }

  @media screen and (max-width: 480px) {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
    padding-right: 48px;
    width: 400px;
  }
`;

export const Title = styled.h2`
  margin-top: 10vh;
  font-size: 24px;
  line-height: 1.5;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Link = styled(NavLink)`
  color: #373737;
  text-decoration-line: underline;
  :hover,
  :focus {
    font-weight: 700;
  }
`;
