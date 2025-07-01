import instance from "./instance";

export const login = async (data) => {
  try {
    const formData = new FormData();

    const phoneWithCode = `+998${data.phone.trim()}`;
    formData.append("phone", phoneWithCode);
    formData.append("password", data.password);


    const res = await instance.post("/login", formData);


    if (!res.data.token || !res.data.admin) {
      throw new Error("Login failed");
    }

    return res.data;
  } catch (err) {
    console.error("Login API failed:", err);
    throw err;
  }
};
