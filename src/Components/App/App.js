// imports
import Header from '../Header';
import ComponentPanel from '../ComponentPanel';
import TeamDisplay from '../TeamsDisplay/index';

// Top level component
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
