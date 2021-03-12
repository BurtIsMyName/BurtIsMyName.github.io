var mouseX
var isDragging
var dragInterval

var slider
var img

var maxScroll

var json

window.onload = () => {
    addEventListener('mousemove', calculateMousePosition)
    img = document.getElementsByClassName('img')

    var url = window.location.href
    var urlPar = getParams(url)

    loadJSON(urlPar)
}

var getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
}

async function loadJSON(name){
    json = await getJSON(`../json/${name}.json`)
    console.log(json);
}

function startDrag(n) {
    slider = document.getElementsByClassName('slider')[n]
    maxScroll = slider.scrollWidth - slider.clientWidth

    isDragging = true
    var startPos = mouseX
    var startLeft = slider.scrollLeft
    dragInterval = setInterval(() => {
        slider.scrollLeft = -mouseX + startPos + startLeft

        for(let i = 0; i < 3; i++)
            img[i + 3 * n].style.left = clamp(-slider.scrollLeft * 0.3, -(img[i + 3 * n].offsetWidth - slider.offsetWidth), 0)

        onmouseup = stopDrag
    }, 1)
}
function stopDrag() {
    isDragging = false
    clearInterval(dragInterval)
}

function calculateMousePosition(mouseEvent) {
    mouseX = mouseEvent.pageX
}

function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
}

async function getJSON(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            var status = xhr.status;
            if (status == 200) 
                resolve(xhr.response);
            else 
                reject(status);
            
        }
        xhr.send();
    })
}