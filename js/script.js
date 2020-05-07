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
var count
var scale = 0
var eventScal = 
[
    'github','soloPlayer','forca',
    'face',
    'linkedin',
    'velha'
] 
for (var i = 0; i < eventScal.length; i++) {
    var nome = eventScal[i]
    
    mouseEnter[i] = document.getElementById(nome).addEventListener('mouseenter',function (){
        this.style.transform = 'scale(1.01,1.05)'
    }) 
    mouseOut[i] = document.getElementById(nome).addEventListener('mouseout', function(){
        clearInterval(count)
        this.style.transform = 'scale(1.0,1.0)'
    })
}
