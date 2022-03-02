import './App.css';
import Mensaje from './Mensaje';

// const Mensaje = () => {
//   return  <h1>Hola Mundo desde Modulo</h1>
// }

const App = () => {

  return (
    <div className="App">

      {/* <h1>Hola Mundo</h1> */}
      {/* <Mensaje /> */}
      <Mensaje color='green' message='Estamos trabajando' />
      <Mensaje color='red' message='En un curso' />
      <Mensaje color='yellow' message='De React' />
  
    </div>
  );
}

export default App;
