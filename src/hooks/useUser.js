import { useQuery } from "@tanstack/react-query";
import { users } from "../api/users";

export const useUsers = () => {
  return useQuery({
    queryFn: users,
    queryKey: ["users"],
  });
};
