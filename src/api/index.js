export const getData = async (url) => {
  try {
    const resp = await window.fetch(url);
    return resp.json();
  } catch (e) {
    throw new Error(e);
  }
};

const getProducts = async () => {
  try {
    const resp = await window.fetch(
      "http://localhost:3001/api/products/products"
    );
    return resp.json();
  } catch (e) {
    throw new Error(e);
  }
};

const getSales = async () => {
  try {
    const resp = await window.fetch("http://localhost:3001/api/sales/sales");
    return resp.json();
  } catch (e) {
    throw new Error(e);
  }
};

const getAuth = async () => {
  try {
    const resp = await window.fetch("http://localhost:3001/api/auth/auth");
    return resp.json();
  } catch (e) {
    throw new Error(e);
  }
};
