export default (state = 0, action) => {
  console.log("Hit reducer")
  switch(action.type){
    case 'select_library':
      console.log("Setting id to ", action.payload)
      return action.payload
    default:
      return state
  }
};
