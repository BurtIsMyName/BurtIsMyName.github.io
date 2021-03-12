var result

var curOp
var prevNum
var curNum

var eq = false

window.onload = () => {
    result = document.getElementById('result')
    var prevOp = curOp
    setInterval(() => {
        if(curOp != prevOp){
            for(let i = 0; i < 4; i++){
                const opBtnTemp = document.getElementsByClassName('operation')[i].style
                opBtnTemp["background-color"] = "rgb(254, 152, 13)"
                opBtnTemp["color"] = "white"
            }
            if(curOp != null){
                const opBtn = document.getElementById(curOp).style
                opBtn["background-color"] = "white"
                opBtn["color"] = "rgb(254, 152, 13)"
            }
        }
        prevOp = curOp
    }, 10)
}

function selNum(num) {
    removeEq()

    if(curOp != null && parseFloat(result.innerHTML) == prevNum)
        result.innerHTML = 0

    if(num == "." && result.innerHTML.toString().includes("."))
        num = ""

    if(result.innerHTML != 0)
        result.innerHTML += num
    else
        result.innerHTML = num
}

function selOp(op) {
    removeEq()

    if(curOp != null)
        equal()

    curOp = op
    prevNum = parseFloat(result.innerHTML)
}

function equal() {
    if(!eq) {
        curNum = parseFloat(result.innerHTML)

        op(prevNum, parseFloat(result.innerHTML))
    } else {
        op(parseFloat(result.innerHTML), curNum)
    }

    eq = true
}

function clearAll() {
    result.innerHTML = 0
    curOp = null
}

function neg() {
    result.innerHTML = parseFloat(result.innerHTML) * -1
}

function perc() {
    result.innerHTML = parseFloat(result.innerHTML) / 100
}

function removeEq() {
    if(eq){
        curOp = null
        eq = false
    }
}

function op(op1, op2) {
    switch (curOp) {
        case "plus":
            result.innerHTML = op1 + op2
            break

        case "sub":
            result.innerHTML = op1 - op2
            break

        case "tim":
            result.innerHTML = op1 * op2
            break

        case "div":
            result.innerHTML = op1 / op2
            break
    }
}