import { getColumnData } from "../../services/DatabaseCalls";
export const columnData = (data) => {
  return {
    type: "GET_COLUMN",
    payload: data,
  };
};

export const dispatchingActionForColumnaData = (id) => {
  return (dispatch) => {
    getColumnData(dispatch, id);
  };
};
