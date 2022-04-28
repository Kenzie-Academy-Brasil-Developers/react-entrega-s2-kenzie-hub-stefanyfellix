import { ButtonStyled } from "./style";
const Buttons = ({ children, functionCallBack }) => {
  return (
    <>
      <ButtonStyled onClick={functionCallBack}>{children}</ButtonStyled>
    </>
  );
};
export default Buttons;
