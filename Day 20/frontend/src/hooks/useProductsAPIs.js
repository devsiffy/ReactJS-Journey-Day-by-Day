import { useEffect, useState } from "react";
import axios from "axios";

const useProductsAPIs = (urlPath) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath);
        setProducts(response.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return [products, loading, error];
};

export default useProductsAPIs;
