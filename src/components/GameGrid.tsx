import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { Text } from "@chakra-ui/react";

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse { 
    count: number;
   results: Game[]; 
}


const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    
    useEffect(() => {
        apiClients.get<FetchGamesResponse>('/games')
        .then((response) => {
            setGames(response.data.results);
        })
        .catch((error) => {
            setError(error.message);
        });
     });
    return (
      <>
          {error && <Text>{error}</Text>}
          <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
                {error && <li>{error}</li>}
              </ul>
      </>
  )
}

export default GameGrid