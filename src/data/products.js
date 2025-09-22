const products = [
  {
    id: 1,
    title: "Juego de Sábanas de Algodón",
    price: 45.99,
    img: "/imgs/set-sabanas.jpeg",
    category: "Hogar",
    stock: 25,
    description: "Sábanas suaves y transpirables para un descanso confortable, disponibles en varios tamaños."
  },
  {
    id: 2,
    title: "Tijeras de Podar Ergonómicas",
    price: 25.50,
    img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Tijeras",
    category: "Jardín",
    stock: 60,
    description: "Herramienta esencial para el cuidado de plantas, con agarre cómodo y cuchillas afiladas."
  },
  {
    id: 3,
    title: "Aspiradora Robótica Inteligente",
    price: 299.00,
    img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Aspiradora",
    category: "Hogar",
    stock: 12,
    description: "Limpia tus suelos de forma autónoma con este robot que navega y aspira de manera eficiente."
  },
  {
    id: 4,
    title: "Manguera Extensible para Riego",
    price: 35.00,
    img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Manguera",
    category: "Jardín",
    stock: 40,
    description: "Manguera ligera y flexible que se expande al llenarse de agua, facilitando el riego."
  },
  {
    id: 5,
    title: "Set de Cuchillos de Cocina",
    price: 89.99,
    img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Cuchillos",
    category: "Hogar",
    stock: 18,
    description: "Set de 5 cuchillos de acero inoxidable con base de madera, perfectos para cualquier cocina."
  },
  {
    id: 6,
    title: "Maceta de Cerámica Decorativa",
    price: 15.00,
    img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Maceta",
    category: "Jardín",
    stock: 75,
    description: "Maceta de diseño moderno, ideal para plantas de interior y exterior."
  },
  {
    id: 7,
    title: "Alfombra de Salón de Lana",
    price: 150.00,
    img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Alfombra",
    category: "Hogar",
    stock: 8,
    description: "Alfombra tejida a mano con lana natural, que añade calidez y estilo a cualquier espacio."
  },
  {
    id: 8,
    title: "Cortacésped Eléctrico",
    price: 199.00,
    img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Cortacésped",
    category: "Jardín",
    stock: 10,
    description: "Cortacésped potente y fácil de manejar para un césped perfectamente cuidado."
  },
  {
    id: 9,
    title: "Lámpara de Pie Moderna",
    price: 70.00,
    img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Lámpara",
    category: "Hogar",
    stock: 20,
    description: "Lámpara de pie con diseño contemporáneo que ilumina cualquier rincón de la casa."
  },
  {
    id: 10,
    title: "Asador Portátil a Carbón",
    price: 65.00,
    img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Asador",
    category: "Jardín",
    stock: 28,
    description: "Asador compacto y fácil de transportar, ideal para picnics y parrilladas en el patio."
  },
  {
    id: 11,
    title: "Licuadora de Alta Potencia",
    price: 59.99,
    img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Licuadora",
    category: "Hogar",
    stock: 35,
    description: "Prepara batidos y sopas cremosas en segundos con esta licuadora de alta potencia."
  },
  {
    id: 12,
    title: "Kit de Herramientas de Jardinería",
    price: 30.00,
    img: "/imgs/set-jardineria.jpeg",
    category: "Jardín",
    stock: 55,
    description: "Un set completo con pala, rastrillo y guantes, perfecto para cualquier jardinero."
  },
  {
    id: 13,
    title: "Mesa de Centro de Madera",
    price: 110.00,
    img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Mesa",
    category: "Hogar",
    stock: 9,
    description: "Mesa de centro de roble macizo con acabado natural, un complemento elegante para tu salón."
  },
  {
    id: 14,
    title: "Silla Plegable para Patio",
    price: 40.00,
    img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Silla",
    category: "Jardín",
    stock: 30,
    description: "Silla resistente y plegable, ideal para relajarse al aire libre o en el patio."
  },
  {
    id: 15,
    title: "Espejo de Pared Decorativo",
    price: 55.00,
    img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Espejo",
    category: "Hogar",
    stock: 15,
    description: "Espejo con marco de metal dorado que añade un toque de sofisticación a cualquier habitación."
  },
  {
    id: 16,
    title: "Sistema de Riego por Goteo",
    price: 49.99,
    img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Riego",
    category: "Jardín",
    stock: 20,
    description: "Sistema de riego automático que ahorra agua y nutre tus plantas de manera eficiente."
  },
  {
    id: 17,
    title: "Organizador de Armario Colgante",
    price: 22.00,
    img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Organizador",
    category: "Hogar",
    stock: 50,
    description: "Maximiza el espacio de tu armario con este organizador colgante de múltiples compartimentos."
  },
  {
    id: 18,
    title: "Mesa de Picnic Plegable",
    price: 80.00,
    img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Mesa+picnic",
    category: "Jardín",
    stock: 15,
    description: "Una mesa portátil con sillas incorporadas, perfecta para salidas al aire libre."
  },
  {
    id: 19,
    title: "Batería de Cocina de Acero Inoxidable",
    price: 130.00,
    img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Batería",
    category: "Hogar",
    stock: 10,
    description: "Un set de ollas y sartenes duraderas, aptas para todo tipo de cocinas."
  },
  {
    id: 20,
    title: "Cobertor para Asador Impermeable",
    price: 28.00,
    img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Cobertor",
    category: "Jardín",
    stock: 45,
    description: "Protege tu asador de la lluvia y el polvo con esta cubierta resistente al agua."
  }
];

export default products;