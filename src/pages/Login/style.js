import styled from "styled-components";
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: var(--grey-3);
  width: 110%;
  height: 50vh;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  h1 {
    font-size: 18px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  label {
    font-weight: 400;
    font-size: 12.182px;
  }
  input {
    background-color: var(--grey-2);
    width: 100%;
    height: 5vh;
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
  span {
    color: var(--error);
    font-size: 15px;
    font-weight: 400;
  }
  button {
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
`;
export const RegisterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  span {
    color: var(--grey-1);
    font-weight: 600;
    font-size: 12px;
  }

  button {
    background-color: var(--grey-1);
    width: 324px;
    height: 48px;
    border: 1.2182px solid var(--grey-1);
    border-radius: 4px;
    color: var(--grey-0);
    font-weight: 500;
    font-size: 16px;
  }
  button:hover {
    background-color: var(--grey-2);
    border: 1.2182px solid var(--grey-2);
  }
`;
