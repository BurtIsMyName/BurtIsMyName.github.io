var cardsGrid

window.onload = () => {
    cardsGrid = document.getElementById('cards-grid')
    json = $.getJSON('123.json', (json) => {
        cardsGrid.innerHTML += 
        `<div class="card" onclick="link('/calculator/index.html')">
            <div class="image-container">
                <img src="${json.project[0].img}">
            </div>
            <strong href="${json.project[0].link}">${json.project[0].name}</strong>
        </div>`
    })
}

function link(link) {
    window.location.href = link
}