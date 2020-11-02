import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./BoardPageStyles.css";
import ColumnModal from "../Modal/ColumnModal";
import CardModal from "../Modal/CardModal";
import { dispatchingActionForColumnaData } from "../../redux/actions/GetColumnData";
import { deleteColumn } from "../../services/DatabaseCalls";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

function BoardPage() {
  const firstId = useSelector((state) => state.firstNodeId);
  const column = useSelector((state) => state.columnReducer);
  const dispatch = useDispatch();
  const [modalToggle, setModalToggle] = useState(false);
  const [cardToggle, setCardToggle] = useState(false);
  const [myDelete, setMyDelete] = useState(false);
  const [cardId, setCardId] = useState("");

  useEffect(() => {
    let myId = firstId.id || localStorage.getItem("Id");
    dispatch(dispatchingActionForColumnaData(myId));
  }, [dispatch, firstId, myDelete]);

  const deleteFlg = () => {
    setMyDelete((pre) => !pre);
  };

  const modalPopUpHandler = () => {
    setModalToggle((pre) => !pre);
  };

  const cardModalHandler = () => {
    setCardToggle((pre) => !pre);
  };

  const deleteHandler = (id) => {
    let myId2 = firstId.id || localStorage.getItem("Id");
    deleteColumn(myId2, id);
    deleteFlg();
  };

  const addCardHandler = (id) => {
    cardModalHandler();
    setCardId(id);
  };

  return (
    <>
      <div className="board-page-main-container">
        <div className="board-page-heading-delete-container">
          <h2>{localStorage.getItem("name")}</h2>
          <div>
            <Button variant="danger">Delete Board</Button>
          </div>
        </div>
        <div className="board-page-column-container">
          {column
            .filter(
              (x) =>
                x.id !== "boardName" &&
                x.id !== "boardType" &&
                x.id !== "teamMember"
            )
            .map((items) => {
              return (
                <div key={items.id} className="column-container">
                  <div className="column-container-heading-delete">
                    <div>{items.columnName}</div>
                    <div>
                      <FaRegTrashAlt
                        color="red"
                        onClick={() => {
                          deleteHandler(items.id);
                        }}
                      />
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      addCardHandler(items.id);
                    }}
                    className="get-card-container"
                  >
                    {" "}
                    add card
                  </div>
                  <div className="card-main-container">
                    <div
                      onClick={() => {
                        addCardHandler(items.id);
                      }}
                      className="card-headline"
                    >
                      card-details
                    </div>
                    <div>
                      <FaRegEdit color="#787676" />
                    </div>
                    <div>
                      <FaRegTrashAlt color="#E33232" />
                    </div>
                  </div>
                </div>
              );
            })}

          <div className="add-column-container" onClick={modalPopUpHandler}>
            Add columns
          </div>
        </div>
      </div>
      <ColumnModal
        modalToggle={modalToggle}
        modalPopUpHandler={modalPopUpHandler}
      />
      <CardModal
        cardId={cardId}
        cardToggle={cardToggle}
        cardModalHandler={cardModalHandler}
      />
    </>
  );
}

export default BoardPage;
