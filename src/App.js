import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/Greeting'
// import FuncGreeting from './components/pure/FuncGreeting';
// import TaskListComponent from './components/container/Task_list';
import  ContactComponent  from './components/pure/ContactComponent';

function App() {

  const contactoPrueba = {
    nombre: 'Fulanito',
    apellido: 'de OpenBootcamp',
    email: 'fulanito@open-bootcamp.com',
    conectado: false,
  };

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
        <ContactComponent contacto={contactoPrueba} />
      </header>
    </div>
  );
}

export default App;
