"use client";
import "./styles/global.css";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import LeftDisplay from "@/components/LeftDisplay";
import Categories from "@/components/Categories";
import ProductsDisplay from "@/components/ProductsDisplay";

export default function Home() {
  const [view, setView] = useState("All");

  const product1 = {
    name: "Air Max 97",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: "/images/shoe1.png",
    category: ["Sneakers", "Clothes"],
    id: 1,
  };

  const product2 = {
    name: "React Presto",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: "/images/shoe2.png",
    category: ["Clothes"],
    id: 2,
  };

  const product3 = {
    name: "Nike Jumper 1",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: "/images/shoe3.png",
    category: ["Clothes", "Mens"],
    id: 3,
  };

  const product4 = {
    name: "React Presto",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: "/images/shoe4.png",
    category: ["Kids"],
    id: 4,
  };

  const product5 = {
    name: "Optimum Pride",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: "/images/shoe5.png",
    category: ["Kids"],
    id: 5,
  };

  const product6 = {
    name: "Nike Panakbo",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: "/images/shoe6.png",
    category: ["Kids"],
    id: 6,
  };

  const allProducts = [
    { ...product1 },
    { ...product2 },
    { ...product3 },
    { ...product4 },
    { ...product5 },
    { ...product6 },
    { ...product1 },
    { ...product2 },
    { ...product3 },
    { ...product4 },
    { ...product5 },
    { ...product6 },
    { ...product1 },
    { ...product2 },
    { ...product3 },
    { ...product4 },
    { ...product5 },
    { ...product6 },
  ];

  const [productsInView, setProductsInView] = useState(allProducts);

  const [cart, setCart] = useState([]);

  const toggleCart = (id) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === id);

      if (productIndex !== -1) {
        return prevCart.filter((item) => item.id !== id);
      } else {
        const productToAdd = allProducts.find((product) => product.id === id);
        if (productToAdd) {
          return [...prevCart, productToAdd];
        }
      }
      return prevCart;
    });
  };

  const handleViewProduct = () => {
    setViewProduct((prev) => !prev);
  };

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  return (
    <div className="page" style={{ display: "flex", flexDirection: "column" }}>
      <Header />

      <div className="Main">
        <LeftDisplay />
        <div className="main-right">
          <Categories view={view} setView={setView} />

          <ProductsDisplay
            products={productsInView}
            toggleCart={toggleCart}
            cart={cart}
          />
        </div>
      </div>
    </div>
  );
}
