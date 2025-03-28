const doc = new jsPDF();

const input = document.getElementById("user-input")
const output = document.getElementById("render-area")
const fonts = document.getElementById("font-select")
const filename = document.getElementById("file-name")
const savebutton = document.getElementById("save-button")
const resetbutton = document.getElementById("reset-button")

function saveRender() {
    let pdfname = filename.value || "default"
    doc.fromHTML(`<html><head><title>Mark Down Render</title><style>body{font-family :${fonts.value}}</style></head><body>` + output.innerHTML + `</body></html>`);
    doc.save(`${pdfname}.pdf`);
   }

function render(){
    output.innerHTML=marked.parse(input.value)
}

function changeFont(){
    output.style.fontFamily = fonts.value
}

function clear(){
    output.innerHTML=""
    input.value=""
    filename.value=""

}

input.addEventListener("input",render)
fonts.addEventListener("change",changeFont)
savebutton.addEventListener("click",saveRender)
resetbutton.addEventListener("click",clear)
