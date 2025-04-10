import { type TarotCard } from "../constants/tarot";
import "./TarotCard.css";

export function TarotCard({
  era,
  tarotCard,
  isReversed,
}: {
  era: string;
  tarotCard: TarotCard;
  isReversed: boolean;
}) {
  return (
    <div className="tarot-card">
      <div>
        {era}: {tarotCard.name}
        {isReversed ? ", reversed" : ""}
      </div>
      <em>
        {isReversed ? tarotCard.reversedMeaning : tarotCard.uprightMeaning}
      </em>
    </div>
  );
}
