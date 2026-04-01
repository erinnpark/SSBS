let container = document.querySelector('.container');

setTimeout(() => {
  container.innerHTML = "<div class='group'><div class='dot' style='left: 220px; top: 220px; background-color: pink;'></div></div>";
}, 500);

setTimeout(() => {
  container.innerHTML = "<div class='group'><div class='dot' style='left: 220px; top: 220px; background-color: pink;'></div><div class='dot' style='left: 160px; top: 220px; background-color: lightblue;'></div></div>";
}, 1000);

setTimeout(() => {
  container.innerHTML = "<div class='group'><div class='dot' style='left: 220px; top: 220px; background-color: pink;'></div><div class='dot' style='left: 160px; top: 220px; background-color: lightblue;'></div><div class='dot' style='left: 280px; top: 220px; background-color: lavender;'></div></div>";
}, 1500);

setTimeout(() => {
  container.innerHTML = "<div class='group'><div class='dot' style='left: 220px; top: 220px; background-color: pink;'></div><div class='dot' style='left: 160px; top: 220px; background-color: lightblue;'></div><div class='dot' style='left: 280px; top: 220px; background-color: lavender;'></div><div class='dot' style='left: 220px; top: 160px; background-color: lightgreen;'></div></div>";
}, 2000);

setTimeout(() => {
  container.innerHTML = "<div class='group'><div class='dot' style='left: 220px; top: 220px; background-color: pink;'></div><div class='dot' style='left: 160px; top: 220px; background-color: lightblue;'></div><div class='dot' style='left: 280px; top: 220px; background-color: lavender;'></div><div class='dot' style='left: 220px; top: 160px; background-color: lightgreen;'></div><div class='dot' style='left: 220px; top: 280px; background-color: peachpuff;'></div></div>";
}, 2500);