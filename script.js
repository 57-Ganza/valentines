const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");

/* NO button shrink + escape */
let scale = 1;
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    scale -= 0.1;
    if (scale < 0.4) scale = 0.4;

    noBtn.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
});

/* Confetti */
function launchConfetti() {
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        confetti.style.backgroundColor =
            `hsl(${Math.random() * 360}, 100%, 70%)`;
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}

/* YES button */
yesBtn.addEventListener("click", () => {
    music.play();
    launchConfetti();

    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background:linear-gradient(135deg,#ff9a9e,#fad0c4);
            font-family:Arial;
            text-align:center;
        ">
            <h1 style="color:#ff4d6d;">SHE SAID YES 💕🎉</h1>
            <h2>You are officially my Valentine ❤️</h2>
            <p>Forever us 🥰</p>
        </div>
    `;

    launchConfetti();
});

/* Gallery modal */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".polaroid img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
