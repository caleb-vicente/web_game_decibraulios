window.onload = function() {
  zonaJuego.startGame();
  init();
}
function init(){
  foto=  new fondo(720,480,0,0,'images.jpg');
  objeto = new objetoInutil();
  foto.pintar();
  objeto.pintar();
}
var zonaJuego = {
  startGame : function(){
    zonaJuego.canvas = document.getElementById('canvas');
        if (zonaJuego.canvas && zonaJuego.canvas.getContext){
            zonaJuego.ctx = zonaJuego.canvas.getContext('2d');
          }
    }

}
function ejecutar_UnJugador() {
	//document.getElementById("UnjugadorButton").style.display = "none";
	//document.getElementById("MultijugadorButton").style.display = "none";
	zonaJuego.ctx.clearRect(0, 0, zonaJuego.canvas.width, zonaJuego.canvas.height);
	foto.pintar();
}
function ejecutar_Multijugador() {
	document.getElementById("UnjugadorButton").style.display = "none";
	document.getElementById("MultijugadorButton").style.display = "none";
	zonaJuego.ctx.clearRect(0, 0, zonaJuego.canvas.width, zonaJuego.canvas.height);
	foto.pintar();
}

function fondo(width, height, x, y, image){ //Constructor de actores (personajes y plataformas)
  this.width= width;
  this.height= height;
  this.x= x;
  this.y= y;
  this.image = new Image();
  this.image.src = image;
  this.pintar = function(){
	//zonaJuego.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	zonaJuego.ctx.clearRect(0, 0, zonaJuego.canvas.width, zonaJuego.canvas.height);
	zonaJuego.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

}
}
function objetoInutil(){
	this.pintar = function(){
		zonaJuego.ctx.beginPath();
	zonaJuego.ctx.moveTo(75,25);
	zonaJuego.ctx.quadraticCurveTo(25,25,25,62.5);
	zonaJuego.ctx.quadraticCurveTo(25,100,50,100);
	zonaJuego.ctx.quadraticCurveTo(50,120,30,125);
	zonaJuego.ctx.quadraticCurveTo(60,120,65,100);
	zonaJuego.ctx.quadraticCurveTo(125,100,125,62.5);
	zonaJuego.ctx.quadraticCurveTo(125,25,75,25);
	zonaJuego.ctx.stroke();
	}
}
