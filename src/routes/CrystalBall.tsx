import { useState } from "react";

const RESPONSES = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

export function CrystalBall() {
  const [prediction, setPrediction] = useState<string | null>(null);

  const handleClick = () => {
    const updatedPrediction =
      RESPONSES[Math.floor(Math.random() * RESPONSES.length)];
    setPrediction(updatedPrediction);
  };

  return (
    <div>
      <em>Think of a yes/no question, then click Predict.</em>
      <p>
        <button onClick={handleClick}>Predict</button>
      </p>
      <p>{prediction}</p>
    </div>
  );
}
