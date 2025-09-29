import ButtonAddToCart from '../ButtonAddToCart';
import './Item.css';
import ItemColorPick from '../ItemColorPick';
import { Link } from 'react-router-dom';

function Item({ id, title, img, price, description }) {
  return(
    <div className="item-card">
      <h3 className="item-card-title">{title}</h3>
      <img className="item-card-img" src={img} alt={title} />
      <p className="item-card-price">Precio: ${price.toFixed(2)}</p>
      <p style={{fontSize:"12px",opacity:"0.8"}}>{description}</p>
      <ButtonAddToCart />
      <hr />
      {/* Ahora "id" existe y se puede usar aquí */}
      <Link to={`/detalle/${id}`}> 
        <button>Ver Detalle</button>         
      </Link>
      <ItemColorPick />
    </div>
  );
}

export default Item;