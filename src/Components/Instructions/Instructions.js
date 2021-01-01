const Instructions = () => {
    return (
        <div className="instructions">
            <p>
                Welcome to Sort-it, the team picking assistant app, that every coach needs!
            </p>

            <p>
                To begin, choose then number of players required per team (minimum 2 players per team). Input players names as well as thier skill level (default 2). Once required number of players is reached you have two options to sort teams, random or balanced (based on skill).
            </p>

            <p>
                Next you get to customise team information. Input team names (required), select team kit colour and choose which team is playing home/away.
            </p>

            <p>
                The final page, pre-match information, outputs both teams as seperate list. There is also a button to reveal the bookies favourite, which is calculated using skill totals and home advatnage.
            </p>

            <p>
                I've also added some alerts to prompt where certain fields are required, just in case you miss something.
            </p>

            <p>
                This app was built by Harry as part of the DevelopMe_Coding Fellowship September-December 2020.
            </p>
        </div>
    )
};

export default Instructions;