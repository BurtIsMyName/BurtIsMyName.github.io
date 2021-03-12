var cardsGrid

window.onload = () => {
    cardsGrid = document.getElementById('cards-grid')
    json = $.getJSON('123.json', (json) => {
        for(let i = 0; i < json.project.length; i++) {
            cardsGrid.innerHTML += 
            `<div class="card" onclick="link('/calculator/index.html')">
                <div class="image-container">
                    <img src="${json.project[i].img}">
                </div>
                <strong href="${json.project[i].link}">${json.project[i].name}</strong>
            </div>`
        }
    })
}

function link(link) {
    window.location.href = link
}