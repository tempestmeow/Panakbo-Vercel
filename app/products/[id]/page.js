"use client";

import "@/app/styles/global.css";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import ContactLogos from "@/components/ContactLogos";
export default function ProductPage() {
  const { id } = useParams();

  const products = [
    { id: 1, name: "Air Max 97", price: 20.99, img: "/images/shoe1big.png" },
    { id: 2, name: "React Presto", price: 20.99, img: "/images/shoe2.png" },
    { id: 3, name: "Nike Jumper 1", price: 20.99, img: "/images/shoe3.png" },
    { id: 4, name: "React Presto", price: 20.99, img: "/images/shoe4.png" },
    { id: 5, name: "Optimum Pride", price: 20.99, img: "/images/shoe5.png" },
    { id: 6, name: "Nike Panakbo", price: 20.99, img: "/images/shoe6.png" },
  ];

  if (!id) return <p>Loading...</p>;

  const product = products.find((p) => p.id == id);
  if (!product) return <p>Product not found</p>;

  return (
    <div className="productPage">
      <Header />

      <div className="productBody">
        <div className="productDesign">
          <img src={product.img} className="shoeImage" />
          <div className="rectangleDesign stripe1"></div>
          <div className="rectangleDesign stripe2"></div>
          <div className="rectangleDesign stripe3"></div>
          <div className="rectangleDesign stripe4"></div>
        </div>
        <ContactLogos />
      </div>
    </div>
  );
}
