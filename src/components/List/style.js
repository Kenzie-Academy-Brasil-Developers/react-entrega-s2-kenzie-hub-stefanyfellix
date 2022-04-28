import styled from "styled-components";

export const ListTechs = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  list-style: none;
  background-color: var(--grey-3);
  border-radius: 4px;
  width: 100%;
  height: 50vh;
`;
export const Techs = styled.li`
  @media screen and (max-width: 600px) {
    width: 94%;
    div {
      width: 100%;
    }
    .openEdit {
      width: 100%;
    }
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  width: 95%;
  border-radius: 4.06066px;
  display: flex;
  background-color: var(--grey-4);
  h3 {
    color: var(--grey-0);
    font-weight: 700;
    font-size: 15px;
    padding-left: 20px;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 14%;
    padding-right: 20px;
  }
  span {
    color: var(--grey-1);
    font-weight: 400;
    font-size: 12.182px;
  }
  .openEdit {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 2vh;
    color: var(--grey-0);
    font-size: 12px;
    background-color: var(--grey-3);
    border: 1px solid var(--grey-3);
    border-radius: 4px;
  }
`;
