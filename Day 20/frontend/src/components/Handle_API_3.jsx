import { useEffect, useState } from "react";
import axios from "axios";

const Handle_API_3 = () => {
  const [search, setSearch] = useState();
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });

        setSearchedProducts(response.data);
      } catch (e) {
        if (axios.isCancel(e)) {
          console.log("Request Cancelled :: ", e.message);
          return;
        }
        setError(true);
      } finally {
        setLoading(false);
      }
    })();

    // cleanup method
    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {error && <h3>Something went wrong..!</h3>}

      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <h3>No. of Products are: {searchedProducts.length}</h3>
      )}
    </>
  );
};

export default Handle_API_3;
