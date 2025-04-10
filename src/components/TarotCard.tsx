import { type TarotCard } from "../constants/tarot";

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
    <p>
      <div>
        {era}: {tarotCard.name}
        {isReversed ? ", reversed" : ""}
      </div>
      <em>
        {isReversed ? tarotCard.reversedMeaning : tarotCard.uprightMeaning}
      </em>
    </p>
  );
}
