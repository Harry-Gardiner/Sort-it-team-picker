// Logic randomise array - Fisher-Yates Algorithm - taken from https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb. 
export const randomiseArray = (playersArray) => {
    for (let i = playersArray.length - 1; i > 0; i -= 1) {
        // for each iteration:

        // get random number between 0 and i index value
        const j = Math.floor(Math.random() * i);

        // get current index value
        const temp = playersArray[i];

        // set current index to equal random index number j
        playersArray[i] = playersArray[j];

        // set random index number to equal i index value
        playersArray[j] = temp;

    };

    // return randomly shuffled array
    return playersArray;
};

// Test logic
// const players = ["Tim", "Bob", "Rob", "Jim", "Zim"]
// console.log(randomiseArray(players));

// Logic for ordering array based on skill.
export const balanceTeams = (playersArray) => {
    // sort array on skill, highest to lowest
    const balancedArray = playersArray.sort((a, b) => b.skill - a.skill);

    return balancedArray;
};

//test
// const testarray = [{ name: "Bom", skill: 2 }, { name: "Lom", skill: 5 }, { name: "Kom", skill: 5 }, { name: "Rom", skill: 4 }, { name: "Com", skill: 4 }, { name: "Jom", skill: 3 }, { name: "Tom", skill: 3 }, { name: "Jim", skill: 2 }]
// console.log(balanceTeams(testarray));

// Logic for splitting either randomised array/balanced array. First loop (i = 0) grabs all even array items, second loop (i = 1) grabs all odd items. Due to balanceTeams being ordered highest to lowest the 1st team array will always receive the highest skilled player, therefore balanced is not truly equal, rather semi-balanced.
export const generateTeams = (playersArray) => {
    const teamArrays = [];

    for (let i = 0; i < 2; i += 1) {
        teamArrays.push(playersArray.filter((player, index) => index % 2 === i));
    };

    return teamArrays;
};

// testing
// const testarray = ["Yaz", "Rob", "Tim", "Bob", "Jim", "Log", "Haz", "Baz", "Tom", "Sam", "a", "B", "CC", "DD"]
// console.log(generateTeams2(testarray));
