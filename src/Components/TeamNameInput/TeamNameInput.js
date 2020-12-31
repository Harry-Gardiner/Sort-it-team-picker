// imports
import { Component } from 'react';
import HomeButton1 from '../HomeTeam/Team1Button';
import HomeButton2 from '../HomeTeam/Team2Button';

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
        const { teamNamesConfirmed, loggedTeam1Name, loggedTeam2Name } = this.props;

        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <div>
                    <label htmlFor="Team 1 name">
                        Team 1 Name:
                    </label>

                    {!teamNamesConfirmed ?
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
                    <HomeButton1 />
                </div>

                <div>
                    <label htmlFor="Team 2 name">
                        Team 2 Name:
                    </label>

                    {!teamNamesConfirmed ?
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
                    <HomeButton2 />
                </div>


                <button
                    type="submit"
                    disabled={teamNamesConfirmed ? true : false}
                >
                    Confirm Team Names
                </button>

            </form>
        )
    }
};

export default TeamNameInput;