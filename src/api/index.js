export const getProducts = async () => {
  try {
    const resp = await window.fetch(
      "http://localhost:3001/api/products/products"
    );
    return resp.json();
  } catch (e) {
    throw new Error(e);
  }
};

export const getSales = async () => {
  try {
    const resp = await window.fetch("http://localhost:3001/api/sales/sales");
    return resp.json();
  } catch (e) {
    throw new Error(e);
  }
};
