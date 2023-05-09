import styled from "styled-components";

export const FooterSection = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 24px;
  background-color: #647dc8;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.5) 0px -10px 20px, rgba(0, 0, 0, 0.5) 0px 0px 6px;

  @media screen and (max-width: 768px) {
    bottom: auto;
    flex-direction: column;
    gap: 24px;
    padding-top: 72px;
  }
`;

export const Logo = styled.div`
  margin: auto;
  width: 76px;
  height: 22px;
`;
