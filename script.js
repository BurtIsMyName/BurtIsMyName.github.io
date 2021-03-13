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
        banner.style["top"] = -document.body.scrollTop * 0.1
    })
}

function link(link) {
    window.location.href = link
}