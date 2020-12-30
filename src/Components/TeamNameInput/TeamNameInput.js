// imports
import { Component } from 'react';

// class based component - state required
class TeamNameInput extends Component {
    constructor(props) {
        super(props);

        // local state
        this.state = {
            Team1Name: "",
            Team2Name: "",
        };

        // bind events
        this.handleTeam1Name = this.handleTeam1Name.bind(this);
        this.handleTeam2Name = this.handleTeam2Name.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    // handle Team 1 name input
    handleTeam1Name = e => {
        this.setState({
            Team1Name: e.currentTarget.value
        })
    };

    // handle Team 2 name input
    handleTeam2Name = e => {
        this.setState({
            Team2Name: e.currentTarget.value
        })
    };

    // handle form submit
    handleSubmit = e => {
        e.preventDefault();

        // pass up a copy of state, i.e. name and skill
        this.props.handleSubmit({ ...this.state });

        // reset local state
        this.setState({
            Team1Name: "",
            Team2Name: "",
        })
    };

    render() {
        const { Team1Name, Team2Name } = this.state;

        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <div>
                    <label htmlFor="Team 1 name">
                        Team 1 Name:
                    </label>

                    <input
                        type="text"
                        id="Team 1 name"
                        name="Team 1 name"
                        value={Team1Name}
                        onChange={this.handleTeam1Name}
                        maxLength="25"
                        minLength="2"
                        placeholder="Team 1"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="Team 2 name">
                        Team 2 Name:
                    </label>

                    <input
                        type="text"
                        id="Team 2 name"
                        name="Team 2 name"
                        value={Team2Name}
                        onChange={this.handleTeam2Name}
                        maxLength="25"
                        minLength="2"
                        placeholder="Team 2"
                        required
                    />
                </div>


                <button
                    type="submit"
                >
                    Submit Team Names
                </button>

            </form>
        )
    }
};

export default TeamNameInput;