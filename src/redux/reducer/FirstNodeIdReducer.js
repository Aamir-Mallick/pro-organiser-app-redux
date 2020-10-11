let firstNode = {};
const firstNodeId = (state = firstNode, action) => {
  switch (action.type) {
    case "FIRST_NODE_ID":
      return { id: action.payload.id, name: action.payload.name };
    default:
      return state;
  }
};

export default firstNodeId;
