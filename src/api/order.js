import instance from "./instance";

export const order = async () => {
  try {

    const token = localStorage.getItem("token");

    if (!token) throw new Error("No token found!");
    const res = await instance.get("/get-order", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("info", res.data.data);

    return {
      data:res.data.data,
      pagination:res.data.pagination
    }
  } catch (error) {
    throw error;
  }
};
