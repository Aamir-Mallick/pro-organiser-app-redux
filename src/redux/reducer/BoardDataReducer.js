const boardDataReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DATA":
      let arr = [...state, action.payload];
      let uniqueArray = Object.values(
        arr.reduce((acc, cur) => Object.assign(acc, { [cur.id]: cur }), {})
      );
      return uniqueArray;
    default:
      return state;
  }
};

export default boardDataReducer;
