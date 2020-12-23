// imports
//import initial from '../initial';

// update functions
const addPlayer = (state, { data }) => {
    return {
        ...state,
        players: [...state.players, { name: data.playerName }]
    }
}

// Main reducer 
const reducer = (state, action) => {
    switch (action.type) {
        // cases
        case "ADD_PLAYER": return addPlayer(state, action)
        // default
        default: return state;
    };
};

export default reducer;