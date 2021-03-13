var cardsGrid
var banner

window.onload = () => {
    cardsGrid = document.getElementById('cards-grid')
    barnner = document.getElementById('header')
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
        banner.top = -document.body.scrollTop
    })
}

function link(link) {
    window.location.href = link
}