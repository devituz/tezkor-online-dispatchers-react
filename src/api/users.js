import instance from "./instance";

export const users = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found!");
    const res = await instance.get("/getUserProfile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      data: res.data,
      // pagination: res.data.pagination,
    };
  } catch (error) {
    throw error;
  }
};
