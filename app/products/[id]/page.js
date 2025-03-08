"use client";

import "@/app/styles/global.css";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import ContactLogos from "@/components/ContactLogos";
import BackIcon from "@/components/BakcIcon";
import Mouse from "@/components/Mouse";
import ScrollIcon from "@/components/ScrollIcon";
export default function ProductPage() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "AIR MAX 97",
      price: 20.99,
      img: "/images/shoe1big.png",
      description:
        "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colors and crisp details, it lets you ride in first-class comfort.",
    },
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
        <div className="productInfo">
          <BackIcon />
          <div className="productTitle">{product.name}</div>
          <div className="productDescription">{product.description}</div>
          <div className="pricing">
            <div className="price">${product.price}</div>
            <div className="checkout">
              <span class="material-symbols-outlined card">credit_card</span>
              <a className="check">Checkout</a>
            </div>
          </div>
          <div className="scroll-down">
            <div className="scroll-arrows">
              <Mouse />
              <ScrollIcon color={"#323232"} />
              <ScrollIcon color={"#595959"} />
              <ScrollIcon color={"#B7B3B3"} />
            </div>
            <a className="scroll-down-text">
              Scroll down <br />
              for comments.
            </a>
          </div>
        </div>
      </div>

      <div className="logos-container">
        <ContactLogos />
      </div>
    </div>
  );
}
