import './App.css';
import Completed from './Components/Completed';
import Pending from './Components/Pending';
import Progress from './Components/Progress';

function App() {
  return (
    <div className="App">
    <div className='heading'>Dynamic To-Do List</div>
      <div className="tasks">
        <Pending/>
        <Progress/>
        <Completed/>
      </div>
    </div>
  );
}

export default App;
