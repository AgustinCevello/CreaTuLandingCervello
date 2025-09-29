import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import "./App.css";

function App() {
  return (
    <main>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={<ItemListContainer greeting="Bienvenido a mi tienda" />} 
          />
          
          <Route
            path="/category/:categParam"  
            element={<ItemListContainer greeting="Categoria de productos" />}
          />

          <Route 
            path="/cart" 
            element={<div><h1>Carrito de compras</h1><p>Proceder a comprar</p></div>} 
          />

          <Route 
            path="/detalle/:idParam" 
            element={<ItemDetailContainer />} 
          />

          <Route 
            path="*" 
            element={<h1>404: Página no encontrada</h1>} 
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;