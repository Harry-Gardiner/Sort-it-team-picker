// imports 
import ResetBtn from '../Reset';
import InstructionsButton from '../InstructionsButton';
import Instructions from '../Instructions/Instructions';

const Header = ({ showInstructions }) => {
    return (
        <>
            <header id="top" className="header">
                <h1>Sort-it</h1>
                <p>Team selector</p>
                <nav>
                    <div className="wrapper">
                        <ResetBtn />
                        <InstructionsButton />
                    </div>
                </nav>
            </header>
            { !showInstructions ? null :
                <div>
                    <Instructions />
                </div>
            }
        </>
    )
}

export default Header; 