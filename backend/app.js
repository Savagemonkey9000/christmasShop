const express = require("express");
const cors = require("cors");
const app = express();

// Lägg till CORS-middleware
app.use(cors());

app.use(express.json());

// Test route
app.get("/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Products route
app.get("/api/products", (req, res) => {
  const products = {
    products: [
      {
        name: "Classic Christmas Tree",
        price: 149.99,
        description:
          "A beautiful 6-foot artificial Christmas tree with pre-installed LED lights. Perfect for any home during the holiday season.",
        image:
          "https://images.unsplash.com/photo-1482638591678-a11589a805f2?auto=format&fit=crop&q=80&w=1000",
        stock: 15,
      },
      {
        name: "Deluxe Ornament Set",
        price: 39.99,
        description:
          "Set of 50 premium glass ornaments in various colors and designs. Includes classic balls, icicles, and unique shapes.",
        image:
          "https://images.unsplash.com/photo-1671145893748-bc442567415d?auto=format&fit=crop&q=80&w=1000",
        stock: 25,
      },
      {
        name: "Santa's Workshop Train Set",
        price: 89.99,
        description:
          "Battery-operated Christmas train set with 4 cars, tracks, and festive decorations. Perfect for under the tree.",
        image:
          "https://images.unsplash.com/photo-1574707669373-7bce91803505?auto=format&fit=crop&q=80&w=1000",
        stock: 8,
      },
      {
        name: "LED Light String Bundle",
        price: 29.99,
        description:
          "100ft of warm white LED string lights. Perfect for indoor and outdoor decoration. Energy efficient and long-lasting.",
        image:
          "https://images.unsplash.com/photo-1735291202269-97bae6d95ac3?auto=format&fit=crop&q=80&w=1000",
        stock: 50,
      },
    ],
  };

  res.json(products.products);
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
