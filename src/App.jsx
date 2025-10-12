import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer/CartContainer";

function App() {

  return (
    <main>
      <CartProvider>
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
              element={<CartContainer/>} 
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
      </CartProvider>
    </main>
  );
}

export default App;