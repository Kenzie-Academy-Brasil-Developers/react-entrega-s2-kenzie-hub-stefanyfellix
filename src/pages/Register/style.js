import styled, { keyframes } from "styled-components";
const appearFromRigth = keyframes`
from{
  opacity: 0;
  transform: translateX(50px);
}
to{
  opacity: 1;
  transform: translateX(0px);
}
`;
export const ContainerRegister = styled.div`
  width: 400px;
  height: 110vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  display: flex;
  align-items: center;
  animation: ${appearFromRigth} 1.3s;
  padding-top: 50px;
`;

export const HeaderRegister = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 20%;
    height: 32px;
    background-color: var(--grey-3);
    border-radius: 4px;
    border: none;
    color: var(--grey-0);
    font-weight: 600;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button:hover {
    background-color: var(--grey-2);
  }
`;

export const Div = styled.div`
  background-color: var(--grey-3);
  width: 99%;
  height: 110%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  h1 {
    font-size: 18px;
    padding-top: 42px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-1);
  }
`;
export const Formstyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  input {
    width: 330px;
    height: 48px;
    background-color: var(--grey-2);
    border: 1.2182px solid var(--grey-2);
    border-radius: 4px;
    color: var(--grey-0);
    text-align: left;
    padding: 8px;
  }
  input::placeholder {
    color: var(--grey-50);
    text-align: left;
    padding: 8px;
  }
  input:focus {
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
  }
  select {
    width: 330px;
    height: 48px;
    background-color: var(--grey-2);
    border: 1.2182px solid var(--grey-2);
    border-radius: 4px;
    color: var(--grey-0);
    text-align: left;
    padding: 8px;
    color: var(--grey-50);
  }
  select:focus {
    border: 1.2182px solid var(--grey-0);
    border-radius: 4px;
    color: var(--grey-0);
  }
  button {
    margin-bottom: 25px;
    background-color: var(--color-primary);
    width: 324px;
    height: 48px;
    border: 1.2182px solid var(--color-primary);
    border-radius: 4px;
    color: var(--grey-0);
    font-weight: 500;
    font-size: 16px;
  }
  button:hover {
    background-color: var(--color-primary-focus);
    border: 1.2182px solid var(--color-primary-focus);
  }
  span {
    color: var(--error);
    font-size: 15px;
    font-weight: 400;
  }
`;
