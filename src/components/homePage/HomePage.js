import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dispatchingAction } from "../../redux/actions/DatabaseAction";
import "./homePageStyles.css";

function HomePage() {
  const data = useSelector((state) => state.BoardDataReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dispatchingAction());
  }, [dispatch]);

  return (
    <>
      <div className="homaPage_main_container">
        {data ? (
          data.map((x) => {
            return (
              <div key={x.id} className="homaPage_inner_container">
                {x.boardName}
              </div>
            );
          })
        ) : (
          <p>loading...</p>
        )}
      </div>
    </>
  );
}

export default HomePage;
