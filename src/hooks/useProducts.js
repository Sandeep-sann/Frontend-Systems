import { useEffect, useState } from "react";
import api from "../services/api";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get("/products");

        setProducts(response.data);

        const uniqueCategories = [
          ...new Set(
            response.data.map((product) => product.category)
          ),
        ];

        setCategories(uniqueCategories);
      } catch (err) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return {
    products,
    categories,
    loading,
    error,
  };
};

export default useProducts;