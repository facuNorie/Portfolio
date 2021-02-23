const sectionsPage = new fullpage(`#fullpage`,{
    navigation: true,
    menu: `menu`,
    anchors: [`home`,`about`,`skills`,`portfolio`,`contact`],
    navigationTooltips: [`Home`,`About`,`Skills`,`Portfolio`,`Contact`],
    showActiveTooltip: true
});

// Create Icons

const icons = [{
    name: `HTML`,
    url: `./media/html5-1.svg`
},
{
    name: `CSS`,
    url: `./media/css-5.png`
},
{
    name: `SASS`,
    url: `./media/sass-1.svg`
},
{
    name: `JAVASCRIPT`,
    url: `./media/logo-javascript.svg`
},
{
    name: `GIT`,
    url: `./media/git-icon.svg`
},
{
    name: `GITHUB`,
    url: `./media/github-icon-1.svg`
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