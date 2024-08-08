import { ChatMeta } from "./chatMeta";

export interface MainCardProps {
  item: ChatMeta;
  index: number;
  separators: {
    highlight: () => void;
    unhighlight: () => void;
    updateProps: (select: 'leading' | 'trailing', newProps: object) => void;
  };
}