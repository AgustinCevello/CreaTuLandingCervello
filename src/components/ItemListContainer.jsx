import products from "../data/products.js";
import Item from "./Item";

function ItemListContainer(props) {
    console.log(products);

    return (
        <section>
            <h2>{props.greeting}</h2>
            <p>Nuestros productos</p>
            <div>
                {
                products.map(function(item)
                { return <Item
                    key={item.id}
                    {...item}
                />})
                }
            </div>
        </section>
    );
}


export default ItemListContainer;

