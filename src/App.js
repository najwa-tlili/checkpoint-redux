import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
import EditTask from "./components/EditTask/EditTask";

function App() {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
      <EditTask/>
    </div>
  );
}

export default App;