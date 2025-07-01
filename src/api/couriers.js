import instance from "./instance";

export const couriers = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found!");
    const res = await instance.get("/get-kuryers", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      data: res.data.data,
      pagination: res.data.pagination,
    };
  } catch (error) {
    throw error;
  }
};
