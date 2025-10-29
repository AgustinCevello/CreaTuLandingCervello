import { useEffect, useState } from "react";
import { getProductById } from "../../data/firebase";
import ItemColorPick from "../ItemColorPick";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext"; 
import ItemCount from "./ItemCount";

function ItemDetailContainer() {
  const { idParam } = useParams();
  const [product, setProduct] = useState({ loading: true });
  const {addItem} = useContext(cartContext);
  
  useEffect(() => {
    getProductById(idParam).then(response => {
      setProduct(response);
    });
  }, [idParam]);

  if (product.loading) {
    return <h2>Cargando...</h2>;
  }

  function handleAddToCart(count) {
    addItem(product, count)
  }

  return (
    <div className="item-card">
      <h3 className="item-card-title">{product.title}</h3>
      <img className="item-card-img" src={product.img} alt={product.title}/>
      <p className="item-card-price">Precio: {product.price}</p>
      <p style={{ fontSize: "12px", opacity: "0.6" }}> {product.description} </p>
      <ItemColorPick />
      
      <ItemCount max={product.stock} min={1} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default ItemDetailContainer;
