export const getData = async (url) => {
  try {
    const resp = await window.fetch(url);
    return resp.json();
  } catch (e) {
    throw new Error(e);
  }
};

export const postData = async (data, url) => {
  try {
    await window.fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw new Error(error);
  }
};
