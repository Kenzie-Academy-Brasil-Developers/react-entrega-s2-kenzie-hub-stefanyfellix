import Buttons from "../Buttons";
import KenzieHub from "../img/KenzieHub.png";
import { HeaderStyled } from "./style";
const Header = ({ button, functionButton }) => {
  return (
    <HeaderStyled>
      <img src={KenzieHub} />
      <Buttons functionCallBack={functionButton}>{button}</Buttons>
    </HeaderStyled>
  );
};
export default Header;
