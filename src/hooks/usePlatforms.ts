import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import  Platform from "../entities/Platform";
import platforms from "../data/platforms";

const apiClient = new APIClient<Platform>('/platforms');

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), // 24 hours
    initialData: platforms,
});
export default usePlatforms;