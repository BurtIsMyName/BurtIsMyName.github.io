var card

window.onload = () => {
    card = document.getElementsByClassName('card')
    json = $.getJSON('123.json', (json) => {
        console.log(json);
    })
}

function link(link) {
    window.location.href = link
}