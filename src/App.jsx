import './App.css';
import NavBar from './components/NavBar'; // Importamos el NavBar
import ItemListContainer from './components/ItemListContainer'; // Importamos el ItemListContainer

function App() {
  const usuario = {
    name: "Lautaro",
    age: 32,
    color: "#9342a8ff",
  };

  function isUserPaymentOK() {
    return "Todo OK 🥰";
  }

  const sectionStyles={
    backgroundColor: usuario.color,
    padding: "20px",
    border: "solid 2px yellow",
    display: "none"
  }


  return (
    <>
      <header>
        {/* Renderizamos el NavBar */}
        <NavBar />
      </header>

      <ItemListContainer greeting="¡Bienvenido a Tienda!" />


      <main>
        <section style={sectionStyles}>
          <h2>Bienvenido {usuario.name} - ;)</h2>
          <p>
            Hola, me llamo {usuario.name} y tengo {usuario.age} años
          </p>
          <p>{isUserPaymentOK()}</p>
        </section>

      </main>

      <footer className="read-the-docs">
        Click on the Vite and React logos to learn more
      </footer>
    </>
  );
}

export default App;
