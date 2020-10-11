export const firstNodeIdAction = (Id, name) => {
  return {
    type: "FIRST_NODE_ID",
    payload: { id: Id, name: name },
  };
};
