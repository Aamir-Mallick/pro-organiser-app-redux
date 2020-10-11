import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dispatchingAction } from "../../redux/actions/DatabaseAction";
import "./homePageStyles.css";
import { useHistory } from "react-router-dom";
import { firstNodeIdAction } from "../../redux/actions/NodeIdAction";

function HomePage() {
  const data = useSelector((state) => state.BoardDataReducers);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(dispatchingAction());
  }, [dispatch]);

  const goToMainBoard = (Id, name) => {
    history.push(`/board${Id}${name}`);
    dispatch(firstNodeIdAction(Id, name));
  };

  return (
    <>
      <div className="homaPage_main_container">
        {data.length !== 0 ? (
          data.map((x) => {
            return (
              <div
                onClick={() => {
                  goToMainBoard(x.id, x.boardName);
                }}
                key={x.id}
                className="homaPage_inner_container"
              >
                {x.boardName}
              </div>
            );
          })
        ) : (
          <p>you have not created any board please create a board..</p>
        )}
      </div>
    </>
  );
}

export default HomePage;
