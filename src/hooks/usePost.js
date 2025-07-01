import { useMutation } from "@tanstack/react-query";
import { login } from "../api/login";

export const usePost = () => {
  return useMutation({
    mutationFn: login,
  });
};
