const panierReducer = (state = 0, action) => {
    switch(action.type){
        case 'ACHETER':
            return state + 1
        case 'ANNULER':
            return state - 1
        default:
            return state;
    }
}

export default panierReducer;