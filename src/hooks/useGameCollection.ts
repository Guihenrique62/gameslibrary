import { useState } from "react";
import { GameType } from "../interfaces";

export default function useGameCollection() {
  const [games, setGames] = useState<GameType[]>(() => {
    const storedGames = localStorage.getItem("obc-game-lib");
    if (!storedGames) return [];
    return JSON.parse(storedGames);
  });

  const addGame = (newGame: GameType) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { ...newGame, id, description: "", onremove: () => {} };
    setGames((state) => {
      const newState = [...state, game];
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  const removeGame = (id: number) => {
    setGames((state) => {
      const newState = state.filter((game) => game.id !== id);
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  }

  return { games, addGame, removeGame };
}
