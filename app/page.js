// Depending on your Header component, add "use client" if needed.
"use client";
import "./styles/global.css";
import { useState } from "react";
import Header from "@/components/Header";
import LeftDisplay from "@/components/LeftDisplay";

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
  ];

  const [productsInView, setProductsInView] = useState(allProducts);

  const mensList = allProducts.filter((product) =>
    product.category.includes("Mens")
  );
  return (
    <div className="page" style={{ display: "flex", flexDirection: "column" }}>
      <Header />

      <div className="Main">
        <LeftDisplay />
        <div className="main-right">
          <div className="categories">
            <span
              className={`categoryIcon ${view === "All" ? "all" : ""}`}
              onClick={() => setView("All")}
            >
              All
            </span>
            <span
              className={`categoryIcon ${view === "Sneakers" ? "all" : ""}`}
              onClick={() => setView("Sneakers")}
            >
              Sneakers
            </span>
            <span
              className={`categoryIcon ${view === "Clothes" ? "all" : ""}`}
              onClick={() => setView("Clothes")}
            >
              Clothes
            </span>
            <span
              className={`categoryIcon ${view === "Mens" ? "all" : ""}`}
              onClick={() => setView("Mens")}
            >
              Mens
            </span>
            <span
              className={`categoryIcon ${view === "Kids" ? "all" : ""}`}
              onClick={() => setView("Kids")}
            >
              Kids
            </span>
            <div className="categoryCircles">
              <div className="circle category"></div>
              <div className="circle category"></div>
              <div className="circle category"></div>
            </div>
            <div className="products-display">
              <div className="productsCollection"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
