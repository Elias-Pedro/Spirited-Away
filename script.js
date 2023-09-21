let cntrBtnsHeader = document.querySelector('#cntrBtnsHeader')
let btnsDoHeader = Array.from(cntrBtnsHeader.querySelectorAll("*"))


function clickBntsDoHeader(indice){
    for (let i = 0; i < btnsDoHeader.length; i++) {
        btnsDoHeader[i].classList.add('btnsHeader');
        btnsDoHeader[i].classList.remove('btnsHeaderSelecionado');
    }
    btnsDoHeader[indice].classList.add('btnsHeaderSelecionado');
    btnsDoHeader[indice].classList.remove('btnsHeader');

}