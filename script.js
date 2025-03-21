let popcornCount = 0;
const popcornButton = document.getElementById('popcornButton');
const popcornContainer = document.getElementById('popcornContainer');
const popCount = document.getElementById('popCount');
const funnyMessage = document.getElementById('funnyMessage');

const funnyMessages = [
 "I’m a kernel, not a balloon!",
  "Really? Another pop?",
  "I was born to pop!",
  "Am I even edible?",
  "Ouch, that hurt!",
  "You’re on a roll with these pops!",
  "This is getting out of hand…",
  "Popcorn time is the best time!",
  "Popcorns make everything better!",
  "Popped and proud!",
  "Another one? I can’t keep up!",
  "Pop! Pop! Pop!",
  "I'm better with butter!"
];

popcornButton.addEventListener('click', () => {
  // Pop the popcorn
  popcornCount++;
  popCount.textContent = `Popcorns popped: ${popcornCount}`;

  // Random funny message
  const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
  funnyMessage.textContent = randomMessage;

  // Add popcorn animation
  const popcorn = document.createElement('div');
  popcorn.classList.add('popcorn');
  popcornContainer.appendChild(popcorn);

  // Play pop sound
  const popSound = document.getElementById('popSound');
  popSound.play();

  // Trigger confetti after every 5 pops
  if (popcornCount % 5 === 0) {
    triggerConfetti();
  }

  // Remove popcorn after animation completes
  setTimeout(() => {
    popcorn.remove();
  }, 1000);
});

function triggerConfetti() {
  const numConfetti = 30;
  for (let i = 0; i < numConfetti; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 2000);
  }
}
