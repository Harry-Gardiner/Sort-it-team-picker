export const setNumberOfPlayers = (state, { value }) => {
    return {
        ...state,
        numberOfPlayers: state.numberOfPlayers + value,
    };
};