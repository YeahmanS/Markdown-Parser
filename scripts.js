
const input = document.getElementById("user-input")
const output = document.getElementById("render-area")
const fonts = document.getElementById("font-select")

function render(){
    output.innerHTML=marked.parse(input.value)
}

function changeFont(){
    output.style.fontFamily = fonts.value
}

input.addEventListener("input",render)
fonts.addEventListener("change",changeFont)