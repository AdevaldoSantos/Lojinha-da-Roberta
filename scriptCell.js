function larguraTela() {
    let larguratela = window.innerWidth
    let bnt = document.getElementById('bntSubmit')

    if (larguratela <= 520) {
        bnt.style.width = '100%'
    }
    else {
        bnt.style.width = '200px'
    }
}

window.onload = larguraTela;
window.onresize = larguraTela;