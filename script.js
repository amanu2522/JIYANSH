const wishButton = document.getElementById("wishButton");
const surprise = document.getElementById("surprise");

wishButton.addEventListener("click", () => {
  surprise.classList.toggle("show");

  if (surprise.classList.contains("show")) {
    wishButton.textContent = "🎉 Birthday Magic Unlocked!";
    launchConfetti();
  } else {
    wishButton.textContent = "🎁 Click for a Birthday Surprise!";
  }
});

function launchConfetti() {
  const emojis = ["🎉", "🎈", "⭐", "✨", "🎂", "🎁", "🥳"];

  for (let i = 0; i < 45; i++) {
    const piece = document.createElement("div");
    piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    piece.style.position = "fixed";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-40px";
    piece.style.fontSize = (18 + Math.random() * 22) + "px";
    piece.style.zIndex = "9999";
    piece.style.pointerEvents = "none";
    piece.style.transition = `transform ${2 + Math.random() * 2}s linear, opacity 3s`;

    document.body.appendChild(piece);

    requestAnimationFrame(() => {
      piece.style.transform =
        `translate(${(Math.random() - 0.5) * 180}px, ${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`;
      piece.style.opacity = "0";
    });

    setTimeout(() => piece.remove(), 4000);
  }
}
