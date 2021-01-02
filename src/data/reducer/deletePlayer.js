export const deletePlayer = (state, action) => {
    // get player index
    const playerToDelete = action.index;
    // get players array from state
    let playersArray = state.players

    // filter out player to delete
    playersArray = playersArray.filter((player, index) => index !== playerToDelete)

    // Check if enough players have been added
    const checkEnoughPlayers = playersArray.length === state.numberOfPlayers * 2 ? true : false;

    return {
        ...state,
        players: playersArray,
        requiredNumOfPlayers: checkEnoughPlayers,
    };
};