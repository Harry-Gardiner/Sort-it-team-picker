// imports
import { ReactComponent as Jersey } from '../../assets/icons/jersey.svg';
// svg from https://www.svgrepo.com/svg/154729/football-jersey

const TeamJersey = ({ colour }) => {


    return (
        <div style={{ width: "80px" }}>
            <Jersey fill={colour} />
        </div>
    )
}

export default TeamJersey;