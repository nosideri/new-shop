import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./productpage.css";

type ProductPageType = {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl: string;
};

type RouteParamType = {
  id: string;
};

function ProductPage() {
  let { id } = useParams<RouteParamType>();

  const [item, setItem] = useState<ProductPageType>();

  useEffect(() => {
    if (!item) {
      // getData();
    }

    async function getData() {
      const response = await fetch(`http://localhost:3005/api/product/${id}`);
      const data = await response.json();
      console.log();

      setItem(data);
    }
  }, []);

  return (
    <div>
      <div className="wrap">
        <h1>{item?.name}</h1>
        <img src={item?.imageUrl} alt="Product" className="prod-image" />
        <div>
          <h3 data-testid="description"> Description:</h3>
          <p> {item?.description} </p>
        </div>

        <p> ${item?.price} </p>
        <Link to={`/`}>Back</Link>
      </div>
    </div>
  );
}

export default ProductPage;
