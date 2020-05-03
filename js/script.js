var body = document.querySelector('body')
var bemVindo = document.getElementById('bemVindo')
var sombra = document.getElementById('sombra')
var data = new Date()
var hora = data.getHours()

if (hora > 6 && hora < 12) {
    body.style.backgroundImage = 'url(images/dia.jpg)'
    bemVindo.innerText = 'Bom Dia'
    sombra.innerText = 'Bom Dia'

}else if(hora < 18){
    body.style.backgroundImage = 'url(images/tarde.jpg)'
    bemVindo.innerText = 'Boa Tarde'
    sombra.innerText = 'Boa Tarde'
}else{
    body.style.backgroundImage = 'url(images/noite.jpg)'
    bemVindo.innerText = 'Boa Noite'
    sombra.innerText = 'Boa Noite'
}
