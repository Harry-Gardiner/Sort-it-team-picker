// imports
import { ReactComponent as Jersey } from '../../assets/icons/jersey.svg';
import { ReactComponent as Short } from '../../assets/icons/short.svg';
import { ReactComponent as Boot } from '../../assets/icons/boot.svg';
// svg from https://www.svgrepo.com/svg/154729/football-jersey

const TeamJersey = ({ colour }) => {


    return (
        <div style={{ display: "flex" }}>
            <Jersey style={{ width: "5rem" }} fill={colour} />
            <Short style={{ width: "4.5rem" }} fill={colour} />
            <Boot style={{ width: "3rem" }} fill={colour} />
        </div>
    )
}

export default TeamJersey;