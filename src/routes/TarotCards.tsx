import { useEffect, useState } from "react";
import { TarotCard } from "../components/TarotCard";
import { type TarotCardInterface, tarotDeck } from "../constants/tarot";

export function TarotCards() {
  const [cardPast, setCardPast] = useState<TarotCardInterface | null>(null);
  const [cardPresent, setCardPresent] = useState<TarotCardInterface | null>(
    null
  );
  const [cardFuture, setCardFuture] = useState<TarotCardInterface | null>(null);

  useEffect(() => {
    const index1 = Math.floor(Math.random() * tarotDeck.length);

    // logic to avoid duplicates, i.e. picking the same card twice
    let index2 = index1;
    while (index2 === index1) {
      index2 = Math.floor(Math.random() * tarotDeck.length);
    }

    let index3 = index2;
    while (index3 === index2 || index3 === index1) {
      index3 = Math.floor(Math.random() * tarotDeck.length);
    }

    setCardPast(tarotDeck[index1]);
    setCardPresent(tarotDeck[index2]);
    setCardFuture(tarotDeck[index3]);
  }, []);

  if (!cardPast || !cardPresent || !cardFuture) {
    return null;
  }

  return (
    <div>
      <TarotCard era="Past" tarotCard={cardPast} isReversed={false} />
      <TarotCard era="Present" tarotCard={cardPresent} isReversed={true} />
      <TarotCard era="Future" tarotCard={cardFuture} isReversed={false} />
    </div>
  );
}
