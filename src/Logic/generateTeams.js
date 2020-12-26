export const generateTeams = (playersArray) => {
    // check if array length is 10
    if (playersArray.length !== 10) {
        return "10 Players are required";
    };

    // get first 5 players
    const team1 = playersArray.splice(0, 5);

    // get remaining 5 players
    const team2 = playersArray;

    // store teams as nested arrays
    const teams = [team1, team2];

    return teams;
}

// test
const testarray = ["Yaz", "Rob", "Tim", "Bob", "Jim", "Log", "Haz", "Baz", "Tom", "Sam"]

console.log(generateTeams(testarray));