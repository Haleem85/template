const initialState = { rotating: true };
export const Rotate = (state = initialState, action) => {
  switch (action.type) {
    case "rotating":
      return {
        rotating: action.payload,
      };
    default:
      return state;
  }
};
export default Rotate.reducer;
