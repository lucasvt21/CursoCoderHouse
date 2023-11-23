import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoty' element={<ItemListContainer />} />
        <Route path='/item/:id' element={< ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
