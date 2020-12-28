export const generateTeams = (playersArray) => {
    // middle of array
    const midpoint = playersArray.length / 2;

    // get first 5 players
    const team1 = playersArray.splice(0, midpoint);

    // get remaining 5 players
    const team2 = playersArray;

    // store teams as nested arrays
    const teams = [team1, team2];

    return teams;
}

// test
// const testarray = ["Yaz", "Rob", "Tim", "Bob", "Jim", "Log", "Haz", "Baz", "Tom", "Sam", "a", "B", "CC", "DD"]

// console.log(generateTeams(testarray));