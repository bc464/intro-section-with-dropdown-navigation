// **NAVBAR*****
const btnNavEl = document.querySelector(".btn-mobile-nav");
const navbarEl = document.querySelector(".header");
const project = document.querySelector(".project");
btnNavEl.addEventListener("click", function(){
		
	navbarEl.classList.toggle("nav-open");
});

// ****DROPDOWN****
const triggers = document.querySelectorAll(".snap > li");
const background = document.querySelector(".dropdownBackground");

const nav = document.querySelector(".navbar");
const downArrow = document.querySelectorAll(".down-arrow")
const upArrow = document.querySelectorAll(".up-arrow")

function handleEnter() {
	this.classList.add("trigger-enter");
	setTimeout(() => this.classList.contains("trigger-enter") && this.classList.add("trigger-enter-active"), 150);
	background.classList.add("open");
	
	this.classList.toggle("show-text")
	
	const dropdown = this.querySelector('.dropdown');
	
	const dropdownCoords = dropdown.getBoundingClientRect();
	const navCoords = nav.getBoundingClientRect();

	const coords = {
		height: dropdownCoords.height,
		width: dropdownCoords.width,
		top: dropdownCoords.top - navCoords.top,
		left: dropdownCoords.left - navCoords.left
	};

	background.style.setProperty("width", `${coords.width}px`);
	background.style.setProperty("height", `${coords.height}px`);
	background.style.setProperty("transform", `translate(${coords.left}px, ${coords.top}px`);
}
function handleLeave() {
     this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
    this.classList.remove("show-text")
  }

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));