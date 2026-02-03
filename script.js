const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

const messages = [
    "Oh really? Playing hard to get? 😏",
    "Wow… such attitude for someone who loves me 😌",
    "Careful… you're flirting with danger 😉",
    "That's cute. Try again 😎",
    "You know this button doesn't work, right? 😏",
    "Stop teasing me and say yes already 😘",
    "At this point you're just flirting 🙄❤️",
    "Wow… savage. I like it 😌",
    "Fine… I’ll pretend you meant YES 😏",
    "Just kidding, say yes please! ❤️"
];

let count = 0;

yesBtn.addEventListener("click", () => {
    message.textContent = "Yaaay! I knew you'd say yes ❤️🥰";
});

noBtn.addEventListener("click", () => {
    message.textContent = messages[count];
    count = (count + 1) % messages.length;
});