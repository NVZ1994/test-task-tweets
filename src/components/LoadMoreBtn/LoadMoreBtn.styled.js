import styled from "styled-components";

export const LoadMoreButton = styled.button`
  padding: 15px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #647dc8;

  box-shadow: 0px 3.5px 3.5px rgba(0, 0, 0, 0.25);
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #ebd8ff;

  :hover {
    background-color: #471ca9;
  }

  :active {
    box-shadow: 0px 3.5px 3.5px rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }
`;
