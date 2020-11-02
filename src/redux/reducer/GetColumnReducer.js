const columnReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_COLUMN":
      let arr = [...action.payload];
      let uniqueArray = Object.values(
        arr.reduce((acc, cur) => Object.assign(acc, { [cur.id]: cur }), {})
      );
      return uniqueArray;
    default:
      return state;
  }
};

export default columnReducer;
