// imports
import { Component } from 'react';

// class based component - state required
class PlayerInputForm extends Component {
    constructor(props) {
        super(props);

        // local state
        this.state = {
            playerName: "",
        };

        // bind events
        this.handleName = this.handleName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle name input
    handleName = e => {
        this.setState({
            playerName: e.currentTarget.value
        })
    }

    // handle form submit
    handleSubmit = e => {
        e.preventDefault();

        this.props.handleSubmit({ ...this.state });

        // reset local state
        this.setState({
            playerName: "",
        })

    }

    render() {
        const { playerName } = this.state;
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
                    />
                </div>

                { requiredNumOfPlayers ? null :
                    <button
                        type="button"
                    >
                        Add Player
                    </button>
                }
            </form>
        )
    }
};

export default PlayerInputForm;