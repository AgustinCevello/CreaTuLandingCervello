import products from "./products.js";

export function getProducts() {
  return new Promise((resolve/*, reject*/) => {
    console.log("Promesa creada, procesando...");
    setTimeout(() => resolve(products), 2000);
    //setTimeout(()=>reject("Servicio no disponible :("),2000);
  });
}

export function getProdctsById(idParam) {
  return new Promise((resolve) => {
    const productsRequested = products.find(item => item.id === Number(idParam));
    console.log("Devolviendo producto según id...", productsRequested);
    setTimeout(() => resolve(productsRequested), 1000);
  });
}

export function getProductsByCategory(categoryParam) {
  return new Promise((resolve) => {
    const productsFiltered = products.filter(item => item.category === categoryParam);
    console.log("Devolviendo productos según categoría...", productsFiltered);
    setTimeout(() => resolve(productsFiltered), 2000);
  });
}