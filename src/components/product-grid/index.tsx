import "./product-grid.css";
// import mockData from "../mockData/data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type ProductType = {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl: string;
};

function ProductGrid() {
  const [items, setItems] = useState<ProductType[]>([]);

  useEffect(() => {
    if (items && items.length === 0) {
      getData();
    }

    async function getData() {
      const response = await fetch("http://localhost:3005/api/products");
      const data = await response.json();

      setItems(data);
    }
  }, []);

  return (
    <div className="f-products">
      <h3 className="f-title"> Featured Products - Coming soon </h3>
      <div className="container">
        {items.map((mockData, index) => {
          return (
            <div key={mockData.id} className={`item${index + 1}`}>
              <h1>{mockData.name}</h1>
              <img
                src={mockData.imageUrl}
                alt="Product"
                className="prod-image"
              />
              <p>${mockData.price}</p>
              <Link to={`/products/${mockData.id}`}>See more</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductGrid;
