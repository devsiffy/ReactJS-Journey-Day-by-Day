import { useEffect, useState } from "react";
import axios from "axios";

const Handle_API_1 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (error) {
    return <h3>Something went wrong..!</h3>;
  }

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h3>No. of Products are: {products.length}</h3>
    </>
  );
};

export default Handle_API_1;
