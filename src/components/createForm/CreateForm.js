import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { setBoardDataToDatabase } from "../../services/DatabaseCalls";

function CreateForm() {
  const [boardName, setBoardName] = useState("");
  const [teamMember, setTeamMember] = useState("");
  const [boardType, setBoardType] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();

    setBoardDataToDatabase(boardName, teamMember, boardType);

    setBoardName("");
    setTeamMember("");
    setBoardType("");
  };

  return (
    <div>
      <h3>create board</h3>
      <Form onSubmit={clickHandler}>
        <Form.Group>
          <Form.Label>Enter a name of your board</Form.Label>
          <Form.Control
            onChange={(e) => {
              setBoardName(e.target.value);
            }}
            type="text"
            placeholder="e.g Agile Sprint Board"
            value={boardName}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Add your team member</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add your team (seprated by comma)"
            onChange={(e) => {
              setTeamMember(e.target.value);
            }}
            value={teamMember}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter the type of your board</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g UX Design"
            onChange={(e) => {
              setBoardType(e.target.value);
            }}
            value={boardType}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="ml-10">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateForm;
