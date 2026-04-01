let container = document.querySelector(".container");

let numberOfDots = 80;

let colors = [
  "#49110b",
  "#56483b",
  "#191a1e",
  "#ad9e89",
  "#c8c2b7",
  "#e7e5db",
  "#49110b",
  "#56483b",
  "#e7e5db",
  "#c8c2b7"
];

for (let i = 0; i < numberOfDots; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");

  let size = Math.random() * 50 + 10;
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let color = colors[Math.floor(Math.random() * colors.length)];

  dot.style.width = size + "px";
  dot.style.height = size + "px";
  dot.style.left = x + "px";
  dot.style.top = y + "px";
  dot.style.backgroundColor = color;

  container.appendChild(dot);
}