// imports
import Header from '../Header/Header';
import ComponentPanel from '../ComponentPanel';
import TeamDisplay from '../TeamsDisplay/index';

// Top component
const App = ({ teamsConfirmed }) => {
  return (
    <>
      <Header />
      <main className="background">
        {!teamsConfirmed ?
          <ComponentPanel /> : <TeamDisplay />
        }
      </main>
    </>
  )
}

export default App;
