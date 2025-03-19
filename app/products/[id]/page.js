"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import "@/app/styles/global.css";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import ContactLogos from "@/components/ContactLogos";
import BackIcon from "@/components/BackIcon";
import Mouse from "@/components/Mouse";
import ScrollIcon from "@/components/ScrollIcon";
import Star from "@/components/Star";
import Avatar2 from "@/components/Avatar2";
import Avatar1 from "@/components/Avatar1";
export default function ProductPage() {
  const router = useRouter();
  const { id } = useParams();
  const [scrollTimes, setScrollTimes] = useState(0);
  const [isInInfo, setInInfo] = useState(true);
  const lastScrollRef = useRef(0);

  const backPage = () => {
    router.push("/");
  };

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

  const comment3 = {
    content:
      "Love my Air Max 87! Super comfortable and stylish, perfect for everyday wear. The cushioning feels great, and the quality is top-notch!",
    stars: 5,
    productId: 2,
  };

  const comment4 = {
    content:
      "Great sneakers with a classic look. Overall, really happy with my purchase!",
    stars: 4,
    productId: 2,
  };

  const comment5 = {
    content:
      "Love my Air Max 87! Super comfortable and stylish, perfect for everyday wear. The cushioning feels great, and the quality is top-notch!",
    stars: 5,
    productId: 3,
  };

  const comment6 = {
    content:
      "Great sneakers with a classic look. Overall, really happy with my purchase!",
    stars: 4,
    productId: 3,
  };

  const comment7 = {
    content:
      "Love my Air Max 87! Super comfortable and stylish, perfect for everyday wear. The cushioning feels great, and the quality is top-notch!",
    stars: 5,
    productId: 4,
  };

  const comment8 = {
    content:
      "Great sneakers with a classic look. Overall, really happy with my purchase!",
    stars: 4,
    productId: 4,
  };

  const comment9 = {
    content:
      "Love my Air Max 87! Super comfortable and stylish, perfect for everyday wear. The cushioning feels great, and the quality is top-notch!",
    stars: 5,
    productId: 5,
  };

  const comment10 = {
    content:
      "Great sneakers with a classic look. Overall, really happy with my purchase!",
    stars: 4,
    productId: 5,
  };

  const comment11 = {
    content:
      "Love my Air Max 87! Super comfortable and stylish, perfect for everyday wear. The cushioning feels great, and the quality is top-notch!",
    stars: 5,
    productId: 6,
  };

  const comment12 = {
    content:
      "Great sneakers with a classic look. Overall, really happy with my purchase!",
    stars: 4,
    productId: 6,
  };

  const account1 = {
    name: "Thomas S.",
    comments: [comment1, comment4, comment5, comment8, comment10, comment12],
    avatar: Avatar1,
  };

  const account2 = {
    name: "Luka D.",
    comments: [comment2, comment3, comment6, comment9, comment11, comment7],
    avatar: Avatar2,
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
    event.preventDefault();

    const now = Date.now();
    if (isInInfo && now - lastScrollRef.current > 200) {
      if (event.deltaY > 0) {
        setScrollTimes((prev) => prev + 1);
      } else if (event.deltaY < 0 && scrollTimes > 0) {
        setScrollTimes((prev) => prev - 1);
      }
      lastScrollRef.current = now;
    }
  };

  useEffect(() => {
    const infoElement = document.querySelector(".productInfo");
    if (infoElement) {
      const wheelHandler = (event) => handleScroll(event);
      infoElement.addEventListener("wheel", wheelHandler, { passive: false });
      return () => {
        infoElement.removeEventListener("wheel", wheelHandler);
      };
    }
  }, [handleScroll]);
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
    {
      id: 2,
      name: "React Presto",
      price: 20.99,
      img: "/images/shoe2big.png",
      description:
        "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colors and crisp details, it lets you ride in first-class comfort.",
    },
    {
      id: 3,
      name: "Nike Jumper 1",
      price: 20.99,
      img: "/images/shoe3big.png",
      description:
        "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colors and crisp details, it lets you ride in first-class comfort.",
    },
    {
      id: 4,
      name: "React Presto",
      price: 20.99,
      img: "/images/shoe4big.png",
      description:
        "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colors and crisp details, it lets you ride in first-class comfort.",
    },
    {
      id: 5,
      name: "Optimum Pride",
      price: 20.99,
      img: "/images/shoe5big.png",
      description:
        "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colors and crisp details, it lets you ride in first-class comfort.",
    },
    {
      id: 6,
      name: "Nike Panakbo",
      price: 20.99,
      img: "/images/shoe6big.png",
      description:
        "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colors and crisp details, it lets you ride in first-class comfort.",
    },
  ];

  if (!id) return <p>Loading...</p>;

  const product = products.find((p) => p.id == id);
  if (!product) return <p>Product not found</p>;

  return (
    <div className="productPage">
      <Header />
      <div className="productBody">
        <div className="productDesign">
          <img src={product.img} className={`shoeImage shoe${id}`} />
          <div className={`rectangleDesign stripe1 color${id}`}></div>
          <div className={`rectangleDesign stripe2 color${id}`}></div>
          <div className={`rectangleDesign stripe3 color${id}`}></div>
          <div className={`rectangleDesign stripe4 color${id}`}></div>
        </div>
        <div
          className="productInfo"
          onMouseEnter={() => setInInfo(true)}
          onMouseLeave={() => setInInfo(false)}
          onWheel={handleScroll}
        >
          <BackIcon onClick={backPage} />
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
                <div
                  key={index}
                  className={`comment ${index % 2 == 0 ? "r" : "l"}`}
                >
                  <div className="account-comment">
                    <div className="withAvatar">
                      {index % 2 === 0 ? <Avatar1 /> : <Avatar2 />}

                      <strong>{comment.name}</strong>
                    </div>
                    <div className="withStars">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} colored={i < comment.stars} />
                        ))}
                      </div>
                      <div
                        className={`textbox ${
                          index % 2 == 0 ? "t-right" : "t-left"
                        }`}
                      >
                        {comment.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div
                className={`scroll-down ${scrollTimes > 0 ? "scrolled" : ""}`}
              >
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
        <ContactLogos className="product-contact-logos" />
      </div>
    </div>
  );
}
