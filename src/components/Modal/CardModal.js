import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { setCardToDatabase } from "../../services/DatabaseCalls";

function CardModal(props) {
  const firstId = useSelector((state) => state.firstNodeId);
  const [title, setTitle] = useState("");
  const [member, setMember] = useState("");
  const [description, setDescription] = useState("");

  const onCloseCard = () => {
    props.cardModalHandler();
  };

  const addCard = () => {
    let myId = firstId.id || localStorage.getItem("Id");
    localStorage.setItem("cardId", props.cardId);

    if (title && member && description) {
      setCardToDatabase(myId, props.cardId, {
        title: title,
        member: member,
        description: description,
      });
      props.cardModalHandler();
    } else {
      alert("filled should not be empty");
    }
  };

  return (
    <div>
      <Modal
        isOpen={props.cardToggle}
        onRequestClose={onCloseCard}
        style={{
          overlay: {
            backgroundColor: "#A0A0A0",
            opacity: 0.98,
          },
          content: {
            width: "600px",
            margin: "20px auto",
          },
        }}
      >
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter title for you task</Form.Label>
            <Form.Control
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              placeholder="Enter email"
              value={title}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              Choose member for this task(select multiple, if needed)
            </Form.Label>
            <Form.Control
              onChange={(e) => {
                setMember(e.target.value);
              }}
              type="text"
              placeholder="Enter email"
              value={member}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Add the description for your task</Form.Label>
            <Form.Control
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="text"
              placeholder="Enter email"
              value={description}
            />
          </Form.Group>

          <Button variant="primary" type="button" onClick={addCard}>
            add Card
          </Button>
        </Form>
      </Modal>
    </div>
  );
}

export default CardModal;
