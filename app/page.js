"use client";
import "./styles/global.css";
import { useState } from "react";
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
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
  ];
  const [productsInView, setProductsInView] = useState(allProducts);

  const [indexOfCart, setIndexOfCart] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleCart = (id) => {
    let updatedCart = [...cart];

    let isInCart = false;

    for (let i = 0; i < updatedCart.length; i++) {
      if (updatedCart[i].id === id) {
        updatedCart.splice(i, 1);
        isInCart = true;
        break;
      }
    }

    if (!isInCart) {
      for (let i = 0; i < productsInView.length; i++) {
        if (productsInView[i].id === id) {
          updatedCart.push(productsInView[i]);
          break;
        }
      }
    }

    setCart(updatedCart);
  };

  const handleViewProduct = () => {
    setViewProduct(!viewProduct);
  };

  const mensList = allProducts.filter((product) =>
    product.category.includes("Mens")
  );
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
            handleViewProduct={handleViewProduct}
          />
        </div>
      </div>
    </div>
  );
}
