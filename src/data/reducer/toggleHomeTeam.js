export const toggleHomeTeam = (state) => {
    const homeTeam = state.team1Home;

    const toggleTeam = homeTeam ? false : true;

    return {
        ...state,
        team1Home: toggleTeam,
    };
};