import { Redirect } from "react-router-dom";
import Buttons from "../../components/Buttons";
import { MdPlaylistAdd } from "react-icons/md";
import { useEffect, useState } from "react";
import ModalRegister from "../../components/modalRegister";
import KenzieHub from "../../components/img/KenzieHub.png";
import { HeaderHome, MainContainer, Divpresentation, Main } from "./style";
import api from "../../services/api";
import List from "../../components/List";
import { useHistory } from "react-router-dom";

const Home = ({ authenticated }) => {
  const [techs, setTechs] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("@KenzieHub:user"));

  useEffect(() => {
    loadTechs();
  }, []);

  const loadTechs = () => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
    api
      .get(`/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setTechs(response.data.techs))
      .catch((err) => console.log(err));
  };

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <MainContainer>
      <HeaderHome>
        <img src={KenzieHub} />
        <Buttons
          functionCallBack={() => {
            localStorage.clear();
            return history.push("/");
          }}
        >
          Sair
        </Buttons>
      </HeaderHome>

      <Divpresentation>
        <h2>{`Olá, ${user.name}`}</h2>
        <h3>{user.course_module}</h3>
      </Divpresentation>
      <Main>
        <div>
          <h2>Tecnologias</h2>
          <Buttons functionCallBack={() => setIsVisibleModal(true)}>
            <MdPlaylistAdd />
          </Buttons>
        </div>
        <List loadTechs={loadTechs} arr={techs} />
      </Main>
      {isVisibleModal ? (
        <ModalRegister
          loadTechs={() => loadTechs()}
          closeModal={() => setIsVisibleModal(false)}
        />
      ) : null}
    </MainContainer>
  );
};
export default Home;
