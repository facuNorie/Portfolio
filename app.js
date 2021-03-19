/* // Responsive
let nav = document.querySelector(".nav");
const mediaQuery = window.matchMedia("(min-width: 768px)");

function handleTabletChange(e) {
	if (e.matches) {
		nav.style.backgroundColor = "red";
	} else {
		nav.style.backgroundColor = "blue";
	}
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery); */

//FULLPAGE

const sectionsPage = new fullpage(`#fullpage`, {
	navigation: true,
	menu: `menu`,
	anchors: [`home`, `about`, `skills`, `portfolio`, `contact`],
	navigationTooltips: [`Home`, `About`, `Skills`, `Portfolio`, `Contact`],
	showActiveTooltip: true,
});

// Look for .hamburger
let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
// On click
hamburger.addEventListener("click", function () {
	// Toggle class "is-active"
	hamburger.classList.toggle("is-active");
	menu.classList.toggle("menu-active");
	// Do something else, like open/close menu
});
// Remove menu when click in a link
let links = document.querySelectorAll(".link");
links.forEach(link => {
	link.addEventListener("click", () => {
		menu.classList.remove("menu-active");
		hamburger.classList.remove("is-active");
	});
});

// Create Icons

const icons = [
	{
		name: `HTML`,
		url: `./media/html5-1.svg`,
	},
	{
		name: `CSS`,
		url: `./media/css-5.png`,
	},
	{
		name: `SASS`,
		url: `./media/sass-1.svg`,
	},
	{
		name: `JAVASCRIPT`,
		url: `./media/logo-javascript.svg`,
	},
	{
		name: `REACT`,
		url: `./media/react-1.svg`,
	},
	{
		name: `STYLED-COMPONENTS`,
		url: `./media/styled-components.png`,
	},
	{
		name: `GIT`,
		url: `./media/git-icon.svg`,
	},
	{
		name: `GITHUB`,
		url: `./media/github-icon-1.svg`,
	},
];

for (icon of icons) {
	let nameIcon = document.createElement("P");
	nameIcon.textContent = icon.name;
	let imgIcon = document.createElement("IMG");
	imgIcon.src = icon.url;
	imgIcon.classList.add(`imgIcon-${icon.name}`);
	let divIcons = document.createElement("DIV");
	divIcons.classList.add("icons");
	divIcons.appendChild(nameIcon);
	divIcons.appendChild(imgIcon);
	document.querySelector(".divIconsSkills").appendChild(divIcons);
}
