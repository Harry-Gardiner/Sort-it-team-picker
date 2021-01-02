export const checkNumOfPlayers = (state) => {
    const numOfPlayers = state.players.length;

    const matchesRequired = numOfPlayers === state.numberOfPlayers * 2; // bool value

    return {
        ...state,
        requiredNumOfPlayers: matchesRequired,
    };
};