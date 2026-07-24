import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

const useProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get(`/products/${id}`);

        setProduct(response.data);
      } catch (err) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return {
    product,
    loading,
    error,
  };
};

export default useProduct;