import useProductAPIs from "../hooks/useProductsAPIs";

const Handle_API_2 = () => {
  const [products, loading, error] = useProductAPIs("/api/products");

  return (
    <>
      {error && <h3>Something went wrong..!</h3>}

      {loading ? (
        <h3>Loading...</h3>
      ) : (
        !error && <h3>No. of Products are: {products.length}</h3>
      )}
    </>
  );
};

export default Handle_API_2;
