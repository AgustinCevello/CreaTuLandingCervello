// Importa el array de productos que ya tienes
import products from "./products.js";

function getProducts() {
  return new Promise((resolve, reject) => {
    console.log("Promesa creada, procesando...");
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
}

export default getProducts;
