const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

var cardsGrid
var banner

window.onload = () => {
    cardsGrid = document.getElementById('cards-grid')
    banner = document.getElementById('header')

    json = $.getJSON('homepage.json', (json) => {
        for(let i = 0; i < json.project.length; i++) {
            cardsGrid.innerHTML += 
            `<div class="card" onclick="link('${json.project[i].link}')">
                <div class="image-container">
                    <img src="${json.project[i].img}">
                </div>
                <strong>${json.project[i].name}</strong>
            </div>`
        }
    })

    document.addEventListener('scroll', () => {
        if(document.body.scrollTop > 0)
            banner.style["background-color"] = "gray"
        else 
            banner.style["background-color"] = "transparent"

        banner.style["top"] = clamp(-document.body.scrollTop, -20 * vh, 0)
    })
}

function link(link) {
    window.location.href = link
}

function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
}