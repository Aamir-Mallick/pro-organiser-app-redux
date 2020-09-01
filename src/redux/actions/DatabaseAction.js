import { getBoardDataFromDatabse } from "../../services/DatabaseCalls";

export const getBoardData = (data) => {
  return {
    type: "GET_DATA",
    payload: data,
  };
};

export const dispatchingAction = () => {
  return (dispatch) => {
    getBoardDataFromDatabse(dispatch);
  };
};
