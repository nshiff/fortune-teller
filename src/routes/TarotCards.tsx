import { TarotCard } from "../components/TarotCard";
import { tarotDeck } from "../constants/tarot";

export function TarotCards() {
  return (
    <div>
      <TarotCard era="Past" tarotCard={tarotDeck[40]} isReversed={false} />
      <TarotCard era="Present" tarotCard={tarotDeck[41]} isReversed={true} />
      <TarotCard era="Future" tarotCard={tarotDeck[42]} isReversed={false} />
    </div>
  );
}
