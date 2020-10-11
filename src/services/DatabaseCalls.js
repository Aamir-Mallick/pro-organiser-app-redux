import { fire } from "../firebase/Config";
import { getBoardData } from "../redux/actions/DatabaseAction";

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
