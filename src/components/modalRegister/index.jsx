import { FormModal, HeaderModal, Modal } from "./style";
import { CgClose } from "react-icons/cg";

import { useForm } from "react-hook-form";

import api from "../../services/api";

import { toast } from "react-toastify";
const ModalRegister = ({ closeModal, loadTechs }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        loadTechs();
        toast.success("Tecnologia Cadastrada");
      })
      .catch((err) => toast.error("Tecnologia já cadastrada"));
  };

  return (
    <Modal>
      <div>
        <HeaderModal>
          <h3>Cadastrar tecnologia</h3>
          <button onClick={closeModal}>
            <CgClose />
          </button>
        </HeaderModal>
        <FormModal onSubmit={handleSubmit(onSubmit)}>
          <label>Nome</label>
          <input
            placeholder="Digite aqui a tecnologia"
            {...register("title")}
          ></input>

          <label>Selecionar status</label>
          <select {...register("status")}>
            <option selected>Selecione</option>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>

          <button>Cadastrar tecnologia</button>
        </FormModal>
      </div>
    </Modal>
  );
};
export default ModalRegister;
