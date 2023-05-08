import styled from "styled-components";

export const FooterSection = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 24px;
  background-color: #647dc8;
  color: #ebd8ff;
  z-index: 1;

  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: auto;
    flex-direction: column;
    gap: 24px;
    padding-top: 72px;
    text-align: center;
  }
`;

export const Logo = styled.div`
  margin: auto;
  width: 76px;
  height: 22px;
`;
