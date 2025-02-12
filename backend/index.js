// /project/backend/index.js
// Import Express and create a new Node.js server
const express = require("express"); // Import Express framework
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001; // Default port or environment-specified one

// Konfigurera CORS för att tillåta anrop från din React-app
app.use(
  cors({
    origin: "http://localhost:3000", // Din React-apps URL
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Mock product data
const products = [
  {
    id: 1,
    name: "Julgran",
    price: 299,
    description: "En fin julgran med ljus och dekorationer.",
    stock: 10,
    imageUrl: "/images/christmas-tree.jpg",
  },
  {
    id: 2,
    name: "Julgranskulor",
    price: 59,
    description: "Färgglada kulor för att dekorera din gran.",
    stock: 50,
    imageUrl: "/images/ornaments.jpg",
  },
  {
    id: 3,
    name: "Julbelysning",
    price: 199,
    description: "LED-ljusslinga för inom- och utomhusbruk.",
    stock: 30,
    imageUrl: "/images/lights.jpg",
  },
  // Add more products if needed
];

// API endpoint to fetch a list of products (id, name, price only)
app.get("/api/products", (req, res) => {
  const productList = products.map(({ id, name, price, imageUrl }) => ({
    id,
    name,
    price,
    imageUrl,
  }));
  res.json(productList);
});

// API endpoint to fetch detailed info for a specific product
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id, 10));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Produkten hittades inte" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend-servern körs på http://localhost:${PORT}`);
});
