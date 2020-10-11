import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dispatchingAction } from "../../redux/actions/DatabaseAction";
import "./homePageStyles.css";
import MyNavbar from "../navbar/MyNavbar";

function HomePage() {
  const data = useSelector((state) => state.BoardDataReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dispatchingAction());
  }, [dispatch]);

  const goToMainBoard = () => {};

  return (
    <>
      <MyNavbar />
      <div className="homaPage_main_container">
        {data.length !== 0 ? (
          data.map((x) => {
            return (
              <div
                onClick={goToMainBoard}
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
