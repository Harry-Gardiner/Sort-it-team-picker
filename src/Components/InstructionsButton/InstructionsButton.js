const InstructionsButton = ({ handleClick, showInstructions }) => {
    return (
        <button
            onClick={handleClick}
        >
            {!showInstructions ? "Instructions" : "close"}
        </button>
    );
};

export default InstructionsButton;