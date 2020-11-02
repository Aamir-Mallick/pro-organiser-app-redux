import React, { useState } from "react";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { setColumnToFireBase } from "../../services/DatabaseCalls";

Modal.setAppElement("#root");

function ColumnModal(props) {
  const id = useSelector((state) => state.firstNodeId);

  const [column, setColumn] = useState("");

  const onCloseHandler = () => {
    props.modalPopUpHandler();
  };

  const setColumnToDataBase = () => {
    let myId3 = id.id || localStorage.getItem("Id");
    setColumnToFireBase(myId3, column);
    onCloseHandler();
  };

  return (
    <div>
      <Modal
        isOpen={props.modalToggle}
        style={{
          overlay: {
            backgroundColor: "#CECACA",
            opacity: 0.93,
          },
          content: {
            width: "400px",
            height: "130px",
            margin: "20px auto",
          },
        }}
      >
        <InputGroup>
          <FormControl
            placeholder="Enter Column"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              setColumn(e.target.value);
            }}
            value={column}
          />
          <InputGroup.Append>
            <Button variant="danger" onClick={onCloseHandler}>
              x
            </Button>
          </InputGroup.Append>
          <br />
        </InputGroup>
        <Button
          onClick={setColumnToDataBase}
          className="mt-3"
          variant="primary"
          size="sm"
        >
          Add Column
        </Button>

        <br />
      </Modal>
    </div>
  );
}

export default ColumnModal;
