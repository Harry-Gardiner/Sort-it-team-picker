// Logic - Fisher-Yates Algorithm - taken from https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb. 

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

    }

    // return randomly shuffled array
    return playersArray;
}

// Test logic
// const players = ["Tim", "Bob", "Rob", "Jim", "Zim"]

// console.log(randomiseArray(players));

