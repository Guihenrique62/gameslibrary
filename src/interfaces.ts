
export interface GameType {
    id: number;
    title: string;
    cover: string;
    description: string;
    onremove: () => void;
  }