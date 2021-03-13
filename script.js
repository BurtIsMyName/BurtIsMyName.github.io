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
        banner.style["transition"] = "0s"

        if(document.body.scrollTop > 0)
            banner.style["background-color"] = "gray"
        else 
            banner.style["background-color"] = "transparent"

        banner.style["top"] = clamp(-document.body.scrollTop, -vh(10), 0)

        banner.style["transition"] = "0.4s"
    })
}

function link(link) {
    window.location.href = link
}

function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
}

function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}