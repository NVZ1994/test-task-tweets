import styled from "styled-components";

export const Form = styled.form`
  position: fixed;
  display: flex;
  justify-content: center;
  height: 50px;
  z-index: 1;
`;

export const Select = styled.select`
  padding: 12px;
  border-radius: 10px;
  border: none;
  background-color: #647dc8;
  font-size: 14px;
  box-shadow: 0px 3.5px 3.5px rgba(0, 0, 0, 0.25);
  appearance: button;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #ebd8ff;

  :hover {
    background-color: #3737a9;
  }
`;

export const Option = styled.option`
  padding: 12px;
  background-color: #ebd8ff;
  color: #373737;

  :checked {
    font-weight: 600;
  }
`;
