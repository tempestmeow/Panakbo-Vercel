"use client";

import React, { useState, useEffect, useRef } from "react";
import "@/app/styles/global.css";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import ContactLogos from "@/components/ContactLogos";
import BackIcon from "@/components/BackIcon";
import Mouse from "@/components/Mouse";
import ScrollIcon from "@/components/ScrollIcon";
import Star from "@/components/Star";
export default function ProductPage() {
  const { id } = useParams();
  const [scrollTimes, setScrollTimes] = useState(0);
  const [isInInfo, setInInfo] = useState(false);
  const lastScrollRef = useRef(0);
  const totalStars = 5;
  const comment1 = {
    content:
      "Love my Air Max 87! Super comfortable and stylish, perfect for everyday wear. The cushioning feels great, and the quality is top-notch!",
    stars: 5,
    productId: 1,
  };

  const comment2 = {
    content:
      "Great sneakers with a classic look. Overall, really happy with my purchase!",
    stars: 4,
    productId: 1,
  };

  const account1 = {
    name: "Thomas S.",
    comments: [comment1],
  };

  const account2 = {
    name: "Luka D.",
    comments: [comment2],
  };

  const accounts = [account1, account2];

  const findAccounts = (id) => {
    return accounts.flatMap((acc) =>
      acc.comments
        .filter((comment) => comment.productId == id)
        .map((comment) => ({
          name: acc.name,
          stars: comment.stars,
          content: comment.content,
        }))
    );
  };

  const [commentsToShow, setCommentsToShow] = useState([]);

  const handleScroll = (event) => {
    const now = Date.now();
    if (isInInfo && now - lastScrollRef.current > 200) {
      // 200ms debounce
      if (event.deltaY > 0) {
        setScrollTimes((prev) => prev + 1);
      } else if (event.deltaY < 0 && scrollTimes > 0) {
        setScrollTimes((prev) => prev - 1);
      }
      lastScrollRef.current = now;
    }
  };

  useEffect(() => {
    const productComments = findAccounts(id);

    if (scrollTimes > 0) {
      const startIdx = 0;
      const endIdx = scrollTimes * 2;
      setCommentsToShow(productComments.slice(startIdx, endIdx));
    } else {
      setCommentsToShow([]);
    }
  }, [scrollTimes, id]);

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

      <div
        className="productBody"
        onMouseEnter={() => setInInfo(true)}
        onMouseLeave={() => setInInfo(false)}
        onWheel={handleScroll}
      >
        <div className="productDesign">
          <img src={product.img} className="shoeImage" />
          <div className="rectangleDesign stripe1"></div>
          <div className="rectangleDesign stripe2"></div>
          <div className="rectangleDesign stripe3"></div>
          <div className="rectangleDesign stripe4"></div>
        </div>
        <div className="productInfo">
          <BackIcon />
          {scrollTimes == 0 && (
            <>
              <div className="productTitle">{product.name}</div>
              <div className="productDescription">{product.description}</div>
              <div className="pricing">
                <div className="price">${product.price}</div>
                <div className="checkout">
                  <span className="material-symbols-outlined card">
                    credit_card
                  </span>
                  <a className="check">Checkout</a>
                </div>
              </div>
              <div className="scroll-down">
                <div className="scroll-arrows">
                  <Mouse />
                  <ScrollIcon delay="0" />
                  <ScrollIcon delay="0.5" />
                  <ScrollIcon delay="1" />
                </div>
                <a className="scroll-down-text">
                  Scroll down <br />
                  for comments.
                </a>
              </div>
            </>
          )}
          {scrollTimes > 0 && (
            <div className="comments-section">
              {commentsToShow.map((comment, index) => (
                <div key={index} className="comment">
                  <strong>{comment.name}</strong>{" "}
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} colored={i < comment.stars} />
                    ))}
                  </div>
                  <p>{comment.content}</p>
                </div>
              ))}
              <div className="scroll-down">
                <div className="scroll-arrows-comments">
                  <ScrollIcon delay="0" />
                  <ScrollIcon delay="0.5" />
                  <ScrollIcon delay="1" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="logos-container">
        <ContactLogos />
      </div>
    </div>
  );
}
