const CreateBalancedTeams = ({ handleClick, requiredNumOfPlayers }) => {

    const windowScroll = () => {
        window.scrollTo(0, 0);
    };

    const handleClicks = () => {
        handleClick();
        windowScroll();
    };

    return (
        <button
            disabled={requiredNumOfPlayers ? false : true}
            onClick={handleClicks}
            className={requiredNumOfPlayers ? null : "button-disabled"}
        >
            Create Balanced Teams
        </button>
    );
};

export default CreateBalancedTeams;