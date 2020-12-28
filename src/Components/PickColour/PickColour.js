import { Component } from 'react';
import { CirclePicker } from 'react-color';
// Colour picker = https://casesandberg.github.io/react-color/

class PickColour extends Component {
    constructor(props) {
        super(props)

        // local state
        this.state = {
            colour: ""
        }

        // bind this

    }

    render() {
        return (
            <CirclePicker
                colors={["#f44336", "#673ab7", "#2196f3", "#009688", "#8bc34a", "#cddc39", "#ffc107", "#ff9800", "#ff5722", "#607d8b"]}
                circleSpacing={20}
            />
        )
    }
}

export default PickColour;