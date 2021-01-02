//imports
import { CirclePicker } from 'react-color';
// Colour picker = https://casesandberg.github.io/react-color/

const PickColour = ({ handleColour }) => {

    const handleChangeComplete = (colour) => {
        handleColour(colour.hex);
    };

    return (
        <div className="flex">
            <p>Pick Team Colour:</p>
            <CirclePicker
                colors={["#f44336", "#2196f3", "#009688", "#ff9800", "#607d8b", "#000000", "#68228B"]}
                circleSpacing={8}
                onChangeComplete={handleChangeComplete}
            />
        </div>
    );
};


export default PickColour;