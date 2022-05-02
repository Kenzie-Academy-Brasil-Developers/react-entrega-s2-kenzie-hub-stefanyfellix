import { FormModal, HeaderModal, Modal } from "./style";
import { CgClose } from "react-icons/cg";

import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";

const ModalEdit = ({ closeModal, idObj, loadTechs }) => {
  const { register, handleSubmit } = useForm();
  console.log(idObj);

  const onSubmit = async (data) => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
    await api
      .put(`/users/techs/${idObj}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        closeModal();
        toast.success("Tecnologia Atualizada");
      })
      .catch((_) => toast.error("Tente novamente!"));
    loadTechs();
  };

  const Delete = async () => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
    await api
      .delete(`/users/techs/${idObj}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        closeModal();
        toast.success("Tecnologia Deletada");
      })
      .catch((_) => toast.error("Tente novamente!"));
  };
  return (
    <Modal>
      <div>
        <HeaderModal>
          <h3>Tecnologia detalhes</h3>
          <button onClick={closeModal}>
            <CgClose />
          </button>
        </HeaderModal>
        <FormModal onSubmit={handleSubmit(onSubmit)}>
          <label>Selecionar status</label>
          <select {...register("status")}>
            <option selected>Selecione</option>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
          <button type="submit" className="save">
            Salvar alterações
          </button>
          <button
            onClick={() => {
              Delete();
            }}
            className="delete"
          >
            Excluir
          </button>
        </FormModal>
      </div>
    </Modal>
  );
};
export default ModalEdit;
