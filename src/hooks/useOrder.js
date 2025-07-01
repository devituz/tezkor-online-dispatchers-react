import { useQuery } from "@tanstack/react-query";
import { order } from "../api/order";

export const useOrder=()=>{
    return useQuery({
        queryFn:order,
        queryKey:["order"]
    })
}