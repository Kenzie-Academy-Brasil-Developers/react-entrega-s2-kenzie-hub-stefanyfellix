import styled from "styled-components";

export const MainContainer = styled.div`
  @media screen and (max-width: 600px) {
    button {
      width: 20%;
    }
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeaderHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  border-bottom: 2px solid var(--grey-3);
  padding-right: 20px;
  padding-left: 20px;
`;

export const Divpresentation = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
  border-bottom: 2px solid var(--grey-3);
  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--grey-0);
  }
  h3 {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--grey-1);
  }
`;
export const Main = styled.div`
  @media screen and (max-width: 600px) {
    width: 95%;
    > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  width: 50%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 30px;
  > div {
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
