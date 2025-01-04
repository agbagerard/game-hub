import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-clients";
import apiClients from "../services/api-clients";


export interface Platform { 
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
        apiClients
            .get<FetchResponse<Platform>>('/platforms/lists/parents')
            .then(res => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
});
export default usePlatforms;