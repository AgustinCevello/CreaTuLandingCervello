import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDocs, collection, doc, getDoc, query, where, addDoc } from "firebase/firestore";
//import products from "./products";

const firebaseConfig = {
    apiKey: "AIzaSyAWggrQrmG4QlYzqntt5U61QzmdNk8UWmY",
    authDomain: "cervello-react.firebaseapp.com",
    projectId: "cervello-react",
    storageBucket: "cervello-react.firebasestorage.app",
    messagingSenderId: "331368698299",
    appId: "1:331368698299:web:6478df1114890eee79349e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProducts() {
    const productsRef = collection(db, "products");

    const productsSnapshot = await getDocs(productsRef);

    const dataDocs = productsSnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
    });

    console.log(dataDocs)
    if(dataDocs.length < 1) {
        throw new Error("No se encontraron productos");
    }
    return dataDocs;
}

export async function getProductById(idParam) {
    const docRef = doc(db, "products", idParam)
    const documentSnapshot = await getDoc(docRef);
    return { id: documentSnapshot.id, ...documentSnapshot.data() }
}

export async function getProductsByCategory(categParam) {
    const productsRef = collection(db,"products");

    const q = query(productsRef,where("category","==",categParam));

    const productsSnapshot= await getDocs(q);
    const dataDocs = productsSnapshot.docs.map(doc => ({id:doc.id,...doc.data()}))

    if(dataDocs.length < 1) {
        throw new Error("No se encontraron productos");
    }

    return dataDocs
}

export async function createOrder(orderData) {
  const ordersRef = collection(db,"orders"); 
  const newDoc = await addDoc(ordersRef,orderData); 
  console.log("Order created!")
  return newDoc.id;
}

//export async function subirProductosAFirestore(){
//  for(let item of products){
//    delete item.id;
//    const newDoc=await addDoc(collection(db,"products"),item)
//    console.log("item created",newDoc.id)
//  }
//}

export default app;