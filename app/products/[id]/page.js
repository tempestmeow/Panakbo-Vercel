"use client";

import { useParams } from "next/navigation";

export default function ProductPage() {
  const { id } = useParams();

  const products = [
    { id: 1, name: "Air Max 97", price: 20.99, img: "/images/shoe1.png" },
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
    <div>
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>Price: ${product.price}</p>
    </div>
  );
}
