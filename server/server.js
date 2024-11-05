import express from "express";
import products from "../src/products.js";
import cors from "cors"; // Импортируем cors

const app = express();
const PORT = 5000;

// Устанавливаем CORS middleware ДО маршрутов
app.use(cors({ origin: "http://localhost:3000" }));

// Дополнительно добавляем заголовки вручную, если это нужно
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Разрешает запросы с порта 3000
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Определяем маршруты
app.get("/products", (req, res) => res.json(products));
app.get("/", (req, res) => {
  res.send(
    "Welcome to the product API! Use /products to get the list of products."
  );
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
