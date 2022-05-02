import { useState } from "react";
import ModalEdit from "../modalEdit";
import { ListTechs, Techs } from "./style";
import { FiEdit3 } from "react-icons/fi";

const List = ({ arr, loadTechs }) => {
  const [isVisibleEditModal, setIsVisibleEditModal] = useState(false);
  const [idTech, setIdTech] = useState();
  return (
    <ListTechs>
      {arr.map((response) => {
        return (
          <Techs key={response.id}>
            <h3>{response.title}</h3>
            <div>
              <span>{response.status}</span>
              <button
                className="openEdit"
                onClick={() => {
                  setIsVisibleEditModal(true);
                  setIdTech(response.id);
                }}
              >
                <FiEdit3 />
              </button>
            </div>
          </Techs>
        );
      })}
      {isVisibleEditModal ? (
        <ModalEdit
          loadTechs={loadTechs}
          idObj={idTech}
          closeModal={() => setIsVisibleEditModal(false)}
        />
      ) : null}
    </ListTechs>
  );
};
export default List;
