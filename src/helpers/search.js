//Search Products
export const search = (products, search) => {
  if (products && search) {
    const searchProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.some((single) =>
          single.toLowerCase().includes(search.toLowerCase())
        ) ||
        product.tag.some((single) =>
          single.toLowerCase().includes(search.toLowerCase())
        )
    );

    return searchProducts;
  }
  return products;
};
