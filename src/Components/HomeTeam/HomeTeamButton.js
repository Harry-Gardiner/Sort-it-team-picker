const HomeTeamButton = ({ home, handleClick }) => {
    // home/away button. If state is true button is set to home, false set to away. 
    return (
        <div className="home-container">
            <button
                onClick={handleClick}
                type="button"
            >
                {home ? "Home" : "Away"}
            </button>
        </div>
    );

};

export default HomeTeamButton;