// imports 
import ResetBtn from '../Reset';

const Header = () => {
    return (
        <header className="header">
            <h1>Sort-it</h1>
            <p>Team selector</p>
            <nav>
                <div className="wrapper">
                    <ResetBtn />
                </div>
            </nav>
        </header>
    )
}

export default Header; 