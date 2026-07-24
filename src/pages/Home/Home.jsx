import React, { useMemo, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import SortDropdown from "../../components/SortDropdown/SortDropdown";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import useProducts from "../../hooks/useProducts";
import styles from "./Home.module.css";

const Home = () => {
  const { products, categories, loading, error } = useProducts();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search
    if (searchTerm.trim()) {
      filtered = filtered.filter((product) =>
        product.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    // Category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sorting
    switch (sortOption) {
      case "priceLowHigh":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "priceHighLow":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "az":
        filtered.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;

      case "za":
        filtered.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;

      default:
        break;
    }

    return filtered;
  }, [
    products,
    searchTerm,
    selectedCategory,
    sortOption,
  ]);

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>Welcome to ShopSphere</h1>
          <p>
            Discover electronics, fashion, jewelry, and
            more at the best prices.
          </p>
        </section>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <div className={styles.controls}>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <SortDropdown
            sortOption={sortOption}
            onSortChange={setSortOption}
          />
        </div>

        <ProductGrid
          products={filteredProducts}
          loading={loading}
          error={error}
        />
      </div>

      <Footer />
    </>
  );
};

export default Home;