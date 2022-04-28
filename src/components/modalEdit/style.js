import styled from "styled-components";
export const Modal = styled.div`
  @media screen and (max-width: 600px) {
    width: 100%;
    div {
      width: 80%;
    }
  }
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(18, 18, 20, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 350px;
    height: 37%;
    color: black;
    background-color: var(--grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
  }
`;

export const HeaderModal = styled.header`
  height: 15%;
  background-color: var(--grey-2);
  color: var(--grey-0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 4px 4px 0px 0px;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;

  button {
    width: 8%;
    color: var(--grey-1);
    background-color: var(--grey-2);
    border: none;
    font-weight: 600;
    font-size: 20px;
  }
  button:hover {
    color: var(--grey-3);
    cursor: pointer;
  }
`;
export const FormModal = styled.form`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  label {
    font-weight: 400;
    font-size: 14px;
    color: var(--grey-0);
    align-self: flex-start;
    padding-left: 30px;
  }

  input {
    width: 80%;
    height: 48px;
    background-color: var(--grey-2);
    border: 1.2182px solid var(--grey-2);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 8px;
    color: var(--grey-0);
  }
  input::placeholder {
    color: var(--grey-50);
    text-align: left;
    padding: 6px;
  }
  input:focus {
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
  }
  select {
    width: 80%;
    height: 48px;
    background-color: var(--grey-2);
    border: 1.2182px solid var(--grey-2);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 8px;
    color: var(--grey-0);
  }
  .save {
    background-color: var(--color-primary);
    width: 80%;
    height: 48px;
    border: 1.2182px solid var(--color-primary);
    border-radius: 4px;
    color: var(--grey-0);
    font-weight: 500;
    font-size: 16px;
  }
  .delete {
    background-color: var(--grey-1);
    border: 1.2182px solid var(--grey-1);
    box-sizing: border-box;
    border-radius: 4px;
    width: 50%;
    height: 48px;
    color: var(--grey-0);
    font-weight: 500;
    font-size: 16px;
  }
`;
