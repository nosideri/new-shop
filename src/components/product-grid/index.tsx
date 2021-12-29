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
    /*
    const controller = new AbortController();
      const signal = controller.signal;
      const promise = new Promise(async (resolve) => {
        const response = await fetch(`http://localhost:3005/api/products`, {
          method: "get",
          signal,
        });
        const data = await response.json();
        resolve(data);

        setItems(data);
        promise.cancel = () => controller.abort();
      }
      */
    const controller = new AbortController();

    getData();

    async function getData() {
      const signal = controller.signal;
      try {
        const response = await fetch("http://localhost:3005/api/products", {
          method: "get",
          signal,
        });
        const data = await response.json();

        setItems(data);
      } catch (error) {
        // console.error(error);
      }
    }
    return () => {
      controller.abort();
      //stop api call from executing
    };
  }, []);

  return (
    <div className="f-products">
      <h3 data-testid="featured" className="f-title">
        Featured Products - Coming soon
      </h3>
      <div className="container">
        {items.map((mockData, index) => {
          return (
            <div
              data-testid="product"
              key={mockData.id}
              className={`item${index + 1}`}
            >
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
