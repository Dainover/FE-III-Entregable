
// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import Cabecera from './components/Cabecera'
import Listado from './components/Listado'
import {useState} from 'react'
function App() {

  
   
  const [total, setTotal] = useState({

    precio: 0, 
    stock: 0
  })
  const aumentarTotal = () => {
    setTotal((prevState) => ({
        ...prevState, // Mantiene las otras propiedades intactas
        precio: prevState.precio + 1, // Incrementa el precio
        stock: prevState.stock + 1, // Incrementa el stock
    }));

  }

  return (
    <div className="App">
      <Cabecera total={total} />
      <Listado total={total} setTotal={setTotal}/>
    </div>
  );
}

export default App;
