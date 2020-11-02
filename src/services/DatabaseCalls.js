import { fire } from "../firebase/Config";
import { getBoardData } from "../redux/actions/DatabaseAction";
import { columnData } from "../redux/actions/GetColumnData";

const db = fire.database();

export const setBoardDataToDatabase = (boardName, teamMember, boardType) => {
  db.ref("user").push({
    boardName: boardName,
    teamMember: teamMember,
    boardType: boardType,
  });
};

export const getBoardDataFromDatabse = (dispatch) => {
  db.ref("user")
    .once("value")
    .then((snapshot) => {
      snapshot.forEach((data) => {
        dispatch(getBoardData({ id: data.key, ...data.val() }));
      });
    })
    .then(() => {
      console.log("Welcome");
    });
};

export const setColumnToFireBase = (firstNode, column) => {
  db.ref(`user/${firstNode}`).push({
    column: column,
  });
};

export const getColumnData = (dispatch, id) => {
  let myDataArray = [];
  db.ref(`user/${id}`).on("value", (snapshot) => {
    snapshot.forEach((data) => {
      myDataArray.push({ id: data.key, columnName: data.val().column });
    });
    dispatch(columnData(myDataArray));
  });
};

export const deleteColumn = (id1, id2) => {
  db.ref(`user/${id1}/${id2}`).remove();
};

export const setCardToDatabase = (id1, id2, dataObj) => {
  db.ref(`user/${id1}/${id2}`).push(dataObj);
};
