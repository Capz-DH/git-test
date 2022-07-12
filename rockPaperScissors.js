const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", e => {
	console.log(e.target.className);
});

paper.addEventListener("click", e => {
	console.log(e.target.className);
});

scissors.addEventListener("click", e => {
	console.log(e.target.className);
});