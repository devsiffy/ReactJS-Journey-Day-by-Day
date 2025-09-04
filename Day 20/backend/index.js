import express from "express";
const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      title: "Headphones",
      price: 2999,
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 4999,
    },
    {
      id: 3,
      title: "Speaker",
      price: 2599,
    },
    {
      id: 4,
      title: "Mouse",
      price: 1899,
    },
    {
      id: 5,
      title: "Keyboard",
      price: 3499,
    },
    {
      id: 6,
      title: "USB-C Hub",
      price: 1299,
    },
    {
      id: 7,
      title: "Laptop",
      price: 1799,
    },
    {
      id: 8,
      title: "Webcam",
      price: 2799,
    },
    {
      id: 9,
      title: "SSD",
      price: 7499,
    },
    {
      id: 10,
      title: "Earbuds",
      price: 3999,
    },
  ];

  if (req.query.search) {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(req.query.search.toLowerCase())
    );

    res.send(filteredProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(3000, () => {
  console.log("Server is listening...");
});
