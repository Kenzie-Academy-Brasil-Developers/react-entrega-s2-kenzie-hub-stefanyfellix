import { useState } from "react";
import ModalEdit from "../modalEdit";
import { ListTechs, Techs } from "./style";
import { FiEdit3 } from "react-icons/fi";

const List = ({ arr, loadTechs }) => {
  const [isVisibleEditModal, setIsVisibleEditModal] = useState(false);
  return (
    <ListTechs>
      {arr.map((response) => {
        return (
          <Techs>
            <h3>{response.title}</h3>
            <div>
              <span>{response.status}</span>
              <button
                className="openEdit"
                onClick={() => setIsVisibleEditModal(true)}
              >
                <FiEdit3 />
              </button>
              {isVisibleEditModal ? (
                <ModalEdit
                  loadTechs={loadTechs}
                  idObj={response.id}
                  closeModal={() => setIsVisibleEditModal(false)}
                />
              ) : null}
            </div>
          </Techs>
        );
      })}
    </ListTechs>
  );
};
export default List;
