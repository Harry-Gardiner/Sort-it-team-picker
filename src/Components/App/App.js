// imports
import Header from '../Header/Header';
import ComponentPanel from '../ComponentPanel';
import TeamDisplay from '../TeamsDisplay/index';

// Top component
const App = ({ teamsConfirmed }) => {
  return (
    <>
      <div className="background">
        <Header />
        <main>
          {!teamsConfirmed ?
            <ComponentPanel /> : <TeamDisplay />
          }
        </main>
      </div>
    </>
  )
}

export default App;
