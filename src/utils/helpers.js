const formatPrice = (price) => {
  if (price === null || price === undefined || isNaN(price)) {
    return "$0.00";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price);
};

export default formatPrice;