import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.css';

function App(greeting) {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting='Bienvenido a nuestro ecommerce' />
    </>
  )
}

export default App
