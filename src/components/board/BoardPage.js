import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./BoardPageStyles.css";

function BoardPage() {
  const firstId = useSelector((state) => state.firstNodeId);
  return (
    <div className="board-page-main-container">
      <div className="board-page-heading-delete-container">
        <h2>{firstId.name}</h2>
        <div>
          <Button variant="danger">Delete Board</Button>
        </div>
      </div>
      {console.log(firstId.id)}
      {console.log(firstId.name)}
      Welcome to the board
    </div>
  );
}

export default BoardPage;
