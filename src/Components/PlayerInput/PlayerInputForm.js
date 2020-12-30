// imports
import { Component } from 'react';

// class based component - state required
class PlayerInputForm extends Component {
    constructor(props) {
        super(props);

        // local state
        this.state = {
            playerName: "",
            playerSkill: 2,
        };

        // bind events
        this.handleName = this.handleName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSkill = this.handleSkill.bind(this);
    }

    // handle name input
    handleName = e => {
        this.setState({
            playerName: e.currentTarget.value
        })
    }

    // handle skill selection
    handleSkill = e => {
        this.setState({
            playerSkill: +e.currentTarget.value
        })
    }

    // handle form submit
    handleSubmit = e => {
        e.preventDefault();

        // pass up a copy of state, i.e. name and skill
        this.props.handleSubmit({ ...this.state });

        // reset local state
        this.setState({
            playerName: "",
            playerSkill: 2,
        })

    }

    render() {
        const { playerName, playerSkill } = this.state;
        const { requiredNumOfPlayers } = this.props;

        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <div>
                    <label htmlFor="player name">
                        Input Player Name:
                    </label>

                    <input
                        type="text"
                        id="player name"
                        name="player name"
                        value={playerName}
                        onChange={this.handleName}
                        disabled={requiredNumOfPlayers ? true : false}
                        maxLength="25"
                        minLength="2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="player skill">
                        Select Player Skill:
                    </label>

                    <input
                        type="range"
                        id="points"
                        name="points"
                        min="1"
                        max="5"
                        value={playerSkill}
                        step="1" // + / - each movement
                        onChange={this.handleSkill}
                        required
                    />
                </div>

                { requiredNumOfPlayers ? null :
                    <button
                        type="submit"
                    >
                        Add Player
                    </button>
                }
            </form>
        )
    }
};

export default PlayerInputForm;