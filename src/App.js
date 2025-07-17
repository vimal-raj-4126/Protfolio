import './App.css';
import Photographers from './Photographers/routes/Photographers';
import FreelanceAndDeveloper from './FreelanceAndDeveloper/routes/FreelanceAndDeveloper';
import FresherAndStudent from './FresherAndStudent/routes/FresherAndStudent';
function App() {
  return (
    <div className="App">
      {/* <FreelanceAndDeveloper /> */}
      {/* <Photographers /> */}
      <FresherAndStudent />
    </div>
  );
}

export default App;
