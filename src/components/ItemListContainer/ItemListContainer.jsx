import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { getProducts, getProductsByCategory } from "../../data/mockAPI.js";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const { categParam } = useParams();

  useEffect(() => {
    if (categParam !== undefined) {
      getProductsByCategory(categParam)
        .then(response => {
          setProducts(response);
        })
        .catch(error => {
          alert(`Error: ${error}`);
        });
    } else {
      getProducts()
        .then(response => {
          setProducts(response);
        })
        .catch(error => {
          alert(`Error: ${error}`);
        });
    }
  }, [categParam]);

  return (
    <section className="item-list-container">
      <h2>{props.greeting}</h2>
      <p>Nuestros productos</p>
      <div className="products-grid">
        {products.map(function (item) {
          return (
            <Item
              key={item.id}
              {...item}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ItemListContainer;