import styled from "styled-components";
import { ReactComponent as LogoIcon } from "assets/logo.svg";
import Picture from "assets/picture.png";
import Line from "assets/line.png";
import Circle from "assets/circle.png";
import FrameBg from "assets/frameBg.png";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 460px;
  background-color: #647dc8;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const Logo = styled(LogoIcon)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const PictureImg = styled.div`
  position: absolute;
  width: 308px;
  height: 168px;
  top: 28px;
  background: url(${Picture}) no-repeat;
`;

export const LineImg = styled.div`
  position: absolute;
  top: 214px;
  width: 380px;
  height: 8px;
  background: url(${Line}) no-repeat;
`;

export const Frame = styled.div`
  position: absolute;
  top: 178px;
  width: 90px;
  height: 89px;
  background: url(${Circle}) no-repeat;
  overflow: hidden;
`;

export const FrameBgc = styled.div`
  position: absolute;
  top: 178px;
  width: 80px;
  height: 80px;
  background: url(${FrameBg}) no-repeat;
`;

export const Img = styled.img`
  position: absolute;
  top: 187.5px;
  width: 70px;
  height: 70px;
  background: url(${FrameBg}) no-repeat;
  border-radius: 50%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin-top: 276px;
`;
export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Count = styled.span`
  margin-right: 7px;
`;

export const Button = styled.button`
  min-width: 190px;
  height: 50px;
  margin-top: 18px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: ${({ color }) => color};
  box-shadow: 0px 3.5px 3.5px rgba(0, 0, 0, 0.25);
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;

  :hover {
    background-color: ${({ color }) => color};
  }

  :active {
    box-shadow: 0px 3.5px 3.5px rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }
`;
