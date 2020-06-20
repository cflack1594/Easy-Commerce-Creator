export const getData = async (url) => {
  try {
    const resp = await window.fetch(url);
    return resp.json();
  } catch (e) {
    throw new Error(e);
  }
};

export const postData = async () => {};
