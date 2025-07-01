import { useQuery } from "@tanstack/react-query";
import { couriers } from "../api/couriers";

export const useCourier=()=>{
    return useQuery({
      queryFn: couriers,
      queryKey: ["kuryer"],
    });
}