import { type TarotCardInterface } from "../constants/tarot";
import "./TarotCard.css";

export function TarotCard({
  era,
  tarotCard,
  isReversed,
}: {
  era: string;
  tarotCard: TarotCardInterface;
  isReversed: boolean;
}) {
  return (
    <div className="tarot-card">
      <div>
        {era}:{" "}
        <strong>
          {tarotCard.name}
          {isReversed ? ", reversed" : ""}
        </strong>
      </div>
      <em>
        {isReversed ? tarotCard.reversedMeaning : tarotCard.uprightMeaning}
      </em>
    </div>
  );
}
