/*
var eventos = []
var github = new evento('github')
eventos.push(github)


var evento = function (a) {
    this.elemento = a
    this.elemento = elemento
    this.mouseOut = document.getElementById(this.elemento).addEventListener('mouseenter', function () 
    {
        this.style.transform = 'scale(1.1,1.1)'
    })
    this.mouseEnter = document.getElementById(this.elemento).addEventListener('mouseout', function () {
        this.style.transform = 'scale(1.0,1.0)'
        
    })

}*/
var mouseEnter = []
var mouseOut = []
var eventScal = 
[
    'github',
    'face',
    'linkedin'
] 
for (var i in eventScal) {
    var nome = eventScal[i]
    mouseEnter[i] = document.getElementById(nome).addEventListener('mouseenter',function (){
        this.style.transform = 'scale(1.1,1.1)'
    })
    mouseOut[i] = document.getElementById(nome).addEventListener('mouseout', function(){
        this.style.transform = 'scale(1.0,1.0)'
    })
}
