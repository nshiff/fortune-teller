const FORTUNES = [
  "A journey of a thousand miles begins with a single step.",
  "Your hard work will soon pay off in unexpected ways.",
  "The greatest risk is not taking one.",
  "Happiness is found when you stop comparing yourself to others.",
  "An exciting opportunity lies ahead of you.",
  "Your creativity will lead you to success.",
  "A smile is your personal welcome mat.",
  "New friends will bring you new perspectives.",
  "You will soon embark on a profitable venture.",
  "The best way to predict your future is to create it.",
  "Good things come to those who wait, but better things come to those who work for it.",
  "Your talents will be recognized and rewarded.",
  "Fortune favors the bold and the brave.",
  "The only way to have a friend is to be one.",
  "Your life will be happy and peaceful.",
  "A pleasant surprise is in store for you soon.",
  "The smart thing is to prepare for the unexpected.",
  "Your ability to accomplish tasks will follow with success.",
  "You can't steal second base while keeping your foot on first.",
  "A lifetime of happiness awaits you.",
  "Your determination will bring you success.",
  "When one door closes, another opens.",
  "Your talents will be recognized and suitably rewarded.",
  "Every exit is an entry somewhere else.",
  "Now is the time to try something new.",
  "The greatest wealth is to live content with little.",
  "The wise person masters the art of living in the present.",
  "You have a deep appreciation of the arts and music.",
  "Your kindness will lead you to great happiness.",
  "A thrilling time is in your near future.",
  "Small opportunities are often the beginning of great achievements.",
  "Patience is the key to unlocking your desires.",
  "An unexpected friendship will prove to be invaluable.",
  "The person who forgives benefits more than the forgiven.",
  "Your hard work is about to pay off. Remember to share the rewards.",
  "You will be successful in your work.",
  "Luck is coming your way.",
  "A fresh start will put you on your way.",
  "There is no wisdom greater than kindness.",
  "You will make change for the better.",
  "The greatest gift is the ability to share your heart.",
  "You will travel to many exotic places in your lifetime.",
  "Your dreams are never silly; depend on them to guide you.",
  "Failure is the chance to do better next time.",
  "The only certainty is that nothing is certain.",
  "Keep your face to the sunshine and you will not see the shadows.",
  "A beautiful, smart, and loving person will be coming into your life.",
  "Your talents will be utilized to their highest potential.",
  "The greatest strength is gentleness.",
  "A lifetime of happiness is in store for you.",
  "Pursue what catches your eye and intrigues your heart.",
  "Your luck has been completely changed today.",
  "Education is the ability to meet life's situations.",
  "You will be invited to an exciting event.",
  "Everywhere you choose to go, friendly faces will greet you.",
  "It is better to have tried and failed than to have never tried at all.",
  "The world may be your oyster, but it's up to you to find the pearls.",
  "Success is going from failure to failure without loss of enthusiasm.",
  "A ship in harbor is safe, but that is not what ships are built for.",
  "You will always be surrounded by true friends.",
  "You already know the answer to the question lingering inside your head.",
  "A person learns best by teaching others.",
  "Be careful or you could fall for some tricks today.",
  "Meditation and prayer will help gain inner peace.",
  "Great things are headed your way.",
  "Your smile lights up everyone's day.",
  "Do not underestimate yourself. Human beings have unlimited potentials.",
  "Your present questions need some time to think about.",
  "The early bird gets the worm, but the second mouse gets the cheese.",
  "You are enthusiastic and inspiring to others.",
  "Your heart is in the right place.",
  "You will find great contentment in the daily routine.",
  "There will be a happy romantic encounter soon.",
  "Someone is thinking of you right now.",
  "A dubious friend may be an enemy in camouflage.",
  "Change is happening in your life, so go with the flow!",
  "To be old and wise, you must first be young and stupid.",
  "Practice makes perfect.",
  "The world is full of cactuses, but we don't have to sit on them.",
  "Nothing astonishes people so much as common sense and plain dealing.",
  "A problem well-stated is a problem half-solved.",
  "Listen to your intuition. It will guide you well.",
  "Never give up. Always find a reason to keep trying.",
  "You will be fortunate in everything you put your hands to.",
  "The best prediction of future is the past.",
  "You have at your command the wisdom of the ages.",
  "Generosity will repay itself sooner than you imagine.",
  "Good news will be brought to you by mail.",
  "A new voyage will fill your life with untold memories.",
  "Your leadership qualities will be tested and proven.",
  "The one who snores will fall asleep first.",
  "You will be sharing great news with all people you love.",
  "If you want the rainbow, you must put up with the rain.",
  "New financial resources will soon become available to you.",
  "Your artistic talents win the recognition they deserve.",
  "You are about to embark on a most delightful journey!",
  "Your future will be happy and productive.",
  "Accept something that you cannot change, and you will feel better.",
];

export function FortuneCookie() {
  const randomFortune = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
  return <p>{randomFortune}</p>;
}
