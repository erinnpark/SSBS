let container = document.querySelector('.container');
let numberOfInteractions = 0;

function runAway() {
	container.style.transform = `translate(${Math.random()*100-50}vw, ${Math.random()*100-50}vh)`;
	numberOfInteractions++;
}

container.innerHTML = "<div class='dot' style='left: 0px; top: 0px; background-color: pink;'></div><div class='dot' style='left: 70px; top: 0px; background-color: lightblue;'></div><div class='dot' style='left: 140px; top: 0px; background-color: lavender;'></div><div class='dot' style='left: 210px; top: 0px; background-color: lightgreen;'></div>";

container.addEventListener('mouseenter', runAway);