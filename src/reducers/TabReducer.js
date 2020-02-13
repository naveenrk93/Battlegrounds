export default (state={}, action) => {
    switch(action.type){
        case "TAB_CHANGE":
            return action.payload;
        default:
            return state;
    }
}
