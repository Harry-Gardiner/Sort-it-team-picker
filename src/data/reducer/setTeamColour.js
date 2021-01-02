export const setTeamColour = (state, { colour, team }) => {
    // set team colours based on team value passed in. If no value colour remains current state    
    return {
        ...state,
        team1Colour: team === 1 ? colour : state.team1Colour,
        team2Colour: team === 2 ? colour : state.team2Colour,
    };
};