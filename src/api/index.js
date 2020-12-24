export const getData = async (dbName, url) => {
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

export const deleteData = async (data, url) => {
  try {
    await window.fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    throw Error(e);
  }
};

export const updateData = async (data, url) => {
  try {
    await window.fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    throw Error(e);
  }
};
