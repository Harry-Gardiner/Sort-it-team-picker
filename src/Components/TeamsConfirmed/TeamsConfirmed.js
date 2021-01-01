// imports
import { Component } from 'react';
import HomeButton1 from '../HomeTeam/Team1Button';
import HomeButton2 from '../HomeTeam/Team2Button';
import Team1Colour from '../PickColour/Colour1';
import Team2Colour from '../PickColour/Colour2';
import Team1Jersey from '../TeamJersey/Team1Jersey';
import Team2Jersey from '../TeamJersey/Team2Jersey';

// class based component - state required
class TeamNameInput extends Component {
    constructor(props) {
        super(props);

        // local state
        this.state = {
            team1Name: "",
            team2Name: "",
        };

        // bind events
        this.handleteam1Name = this.handleteam1Name.bind(this);
        this.handleteam2Name = this.handleteam2Name.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    // handle Team 1 name input
    handleteam1Name = e => {
        this.setState({
            team1Name: e.currentTarget.value
        })
    };

    // handle Team 2 name input
    handleteam2Name = e => {
        this.setState({
            team2Name: e.currentTarget.value
        })
    };

    // handle form submit
    handleSubmit = e => {
        e.preventDefault();

        // pass up a copy of state
        this.props.handleSubmit({ ...this.state });

        // reset local state
        this.setState({
            team1Name: "",
            team2Name: "",
        })
    };

    render() {
        const { team1Name, team2Name } = this.state;
        const { teamsConfirmed, loggedTeam1Name, loggedTeam2Name } = this.props;

        return (
            <div className="customTeams">
                <form
                    onSubmit={this.handleSubmit}
                >
                    <h2 className="card">Customise Teams</h2>
                    <div className="card ">
                        <h3 className="textAlignStart">Team 1</h3>
                        <div className="topRight">
                            <HomeButton1 />
                            <p className="homeAwayText">
                                Toggle
                            </p>
                        </div>
                        <label
                            htmlFor="Team 1 name" className="textAlignStart"
                        >
                            Team 1 Name:
                        </label>

                        {!teamsConfirmed ?
                            <input
                                type="text"
                                id="Team 1 name"
                                name="Team 1 name"
                                value={team1Name}
                                onChange={this.handleteam1Name}
                                maxLength="25"
                                minLength="2"
                                placeholder="Team 1"
                                required
                            /> :
                            <h3>{loggedTeam1Name}</h3>
                        }
                        <Team1Jersey />
                        <Team1Colour />
                    </div>

                    <div className="card">
                        <h3 className="textAlignStart">Team 2</h3>
                        <div className="topRight">
                            <HomeButton2 />
                        </div>
                        <label
                            htmlFor="Team 2 name" className="textAlignStart"
                        >
                            Team 2 Name:
                        </label>

                        {!teamsConfirmed ?
                            <input
                                type="text"
                                id="Team 2 name"
                                name="Team 2 name"
                                value={team2Name}
                                onChange={this.handleteam2Name}
                                maxLength="25"
                                minLength="2"
                                placeholder="Team 2"
                                required
                            /> :
                            <h3>{loggedTeam2Name}</h3>
                        }
                        <Team2Jersey />
                        <Team2Colour />
                    </div>
                    <div className="card">
                        <button
                            type="submit"
                            disabled={teamsConfirmed ? true : false}
                        >
                            Confirm Team Details
                        </button>
                    </div>



                </form>
            </div>
        )
    }
};

export default TeamNameInput;