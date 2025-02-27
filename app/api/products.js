export default function handler(req, res) {
  const products = [
    { id: 1, name: "Air Max 97", price: 20.99, img: "/images/shoe1.png" },
    { id: 2, name: "React Presto", price: 20.99, img: "/images/shoe2.png" },
    { id: 3, name: "Nike Jumper 1", price: 20.99, img: "/images/shoe3.png" },
    { id: 4, name: "React Presto", price: 20.99, img: "/images/shoe4.png" },
    { id: 5, name: "Optimum Pride", price: 20.99, img: "/images/shoe5.png" },
    { id: 6, name: "Nike Panakbo", price: 20.99, img: "/images/shoe6.png" },
  ];

  const { id } = req.query;

  if (id) {
    const product = products.find((p) => p.id == id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    return res.status(200).json(product);
  }

  res.status(200).json(products);
}
