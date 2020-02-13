export default (state={}, action) => {
    switch(action.type){
        case "CARDS":
            return action.payload;
        default:
            return state;
    }
}
