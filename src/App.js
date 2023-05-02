import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/Greeting'
import FuncGreeting from './components/pure/FuncGreeting';
import TaskListComponent from './components/container/Task_list';
import ContactUserComponent from './components/container/Contact_user';
import ContactUser from './components/container/Contact_user';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio de Greeting.jsx  */}
        {/* <Greeting name='Samuel'></Greeting> */}
        {/* Componente de ejemplo funcional */}
        {/* <FuncGreeting name='samuel' /> */}
        {/* Componente de listado de tareas */}
        {/* <TaskListComponent /> */}
        <ContactUser />
      </header>
    </div>
  );
}

export default App;
