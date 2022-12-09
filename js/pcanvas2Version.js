window.onload = function() {
  zonaJuego.startGame();

  contador_cambiar_alas1 = 5;
  contador_cambiar_alas2 = 5;
  //Con numero de jugadores se hace la comprobacion para comenzar el juego
  numero_jugadores = 0;
  submit_pulsado = 0;
  variable_ganar = 0;
  //nombre de los personajes si no se mete nada en el formulario
  nombre1="Jugador 1 ";
  nombre2="Jugador 2 ";
  audioBG = document.getElementById("music");
  audioCol = document.getElementById("colision");

  fondo = new Background(0,0, 720, 480, 'imagen/fondo2.jpg');
  vida = new Background(8, 3, 40, 50, 'imagen/vidas2.png');
  blood = new Background(0,0, 720, 480, 'imagen/blood.png');

  titulo= new Texto(400, 440, "white", "" ); //x, y, width, height, color, texto
  personaje = new Jugador(360,240, 30, 30, 1); //x, y, width, height, numero de pj (1 o 2) para los controles
  personaje2= new Jugador(330, 240, 35, 35, 2);

  puntosSalud_nombre= new Texto(100, 30, "#F6CECE", "");
  puntosSalud_nombre2= new Texto(100, 60, "#F6CECE", "");


  puntosSalud = new Texto(50, 30, "#F6CECE", "");
  puntosSalud2 = new Texto(50, 60, "#F6FECE", "");
  puntuacion= new Texto(450, 30, "white", "" ); //x, y, width, height, color, texto

 obstaculosTipo1 = []; obstaculosTipo2 = []; obstaculosTipo3 = []; obstaculosTipo4 = []; obstaculosTipo5 = []; obstaculosTipoL1=[]; obstaculosTipoReset=[];
  obstaculoReset = new Obstaculo(0,400, 50, 30, 2, 0, 0.01, 0, 'imagen/ob3.png',1);

  obstaculoL1 = new Obstaculo(0,400, 50, 30, 2, 0, 0.01, 0, 'imagen/ob3.png',1); //(x, y, width, height, color, speedX, speedY, accelerationX, accelerationY, image, id)
  obstaculoL2 = new Obstaculo(670,200, 50, 30,  -3, 0, -0.01, 0, 'imagen/ob2.png',2);
  obstaculoL3 = new Obstaculo(0, 50, 50, 30,  3, 0, 0.03, 0, 'imagen/ob1.png',3);
  obstaculoL4 = new Obstaculo(0, 250, 50, 30,  3, 0, 0.03, 0, 'imagen/ob1.png',4);

  obstaculoT1= new Obstaculo(3  , 30, 3, 70,  0, 1, 0, 0.03, 'imagen/ob2.png',5);
  obstaculoT2= new Obstaculo(93, 30, 3, 70,  0, 1, 0, 0.03, 'imagen/ob2.png',6);
  obstaculoT3= new Obstaculo(183, 30, 3, 70, 0, 1, 0, 0.03, 'imagen/ob2.png',7);
  obstaculoT4= new Obstaculo(273, 30, 3, 70,   0, 1, 0, 0.03, 'imagen/ob2.png',8);
  obstaculoT5= new Obstaculo(363, 30, 3, 70,   0, 1, 0, 0.03, 'imagen/ob2.png',9);
  obstaculoT6= new Obstaculo(453, 30, 3, 70,  0, 1, 0, 0.03, 'imagen/ob2.png',10);
  obstaculoT7= new Obstaculo(543, 30, 3, 70,  0, 1, 0, 0.03, 'imagen/ob2.png',11);
  obstaculoT8= new Obstaculo(637 , 30, 3, 70,  0, 1, 0, 0.03, 'imagen/ob2.png',12);
  obstaculoT9= new Obstaculo(715 , 30, 3, 70,  0, 1, 0, 0.03, 'imagen/ob2.png',13);

  obstaculoR1= new Obstaculo(0, 0, 10, 10,  6, 6, 0.01, 0.01, 'imagen/ob3.png',14);
  obstaculoR2= new Obstaculo(720, 480, 10, 10,  -6, -6, -0.01, -0.01, 'imagen/ob3.png',15);
  obstaculoR3= new Obstaculo(720, 0, 10, 10,  -6, 6, 0.01, -0.01, 'imagen/ob3.png',16);
  obstaculoR4= new Obstaculo(0, 480, 10, 10,  6, -6, 0.01, -0.01, 'imagen/ob3.png',17);

  obstaculoB1 = new Obstaculo(0, 320, 60, 60,  7, 0, -0.05, 0, 'imagen/ob1.png',18);
  obstaculoB2 = new Obstaculo(660, 160, 60, 60,  -7, 0, 0.05, 0, 'imagen/ob1.png',19);

  obstaculoF1 = new Obstaculo(0, 220, 2, 2,  0, 0, 0, 0, 'imagen/ob2.png',20);
  obstaculoF2 = new Obstaculo(250, 0, 2, 2, 0, 0, 0, 0, 'imagen/ob2.png',21);
  obstaculoF3 = new Obstaculo(0, 120, 2, 2,  0, 0, 0, 0, 'imagen/ob2.png',22);
  obstaculoF4 = new Obstaculo(300, 0, 2, 2,  0, 0, 0, 0, 'imagen/ob2.png',23);
  obstaculoF5 = new Obstaculo(0, 300, 2, 2,  0, 0, 0, 0, 'imagen/ob2.png',24);
  obstaculoF6 = new Obstaculo(100, 0, 2, 2,  0, 0, 0, 0, 'imagen/ob2.png',25);
  obstaculoF7 = new Obstaculo(0, 400, 2, 2,  0, 0, 0, 0, 'imagen/ob2.png',26);
  obstaculoF8 = new Obstaculo(350, 0, 2, 2,  0, 0, 0, 0, 'imagen/ob2.png',27);

  obstaculosTipoReset.push(obstaculoReset);
  obstaculosTipoL1.push(obstaculoL1);
  obstaculosTipo1.push(obstaculoL1, obstaculoL2, obstaculoL3, obstaculoL4);
  obstaculosTipo2.push(obstaculoT1, obstaculoT2, obstaculoT3, obstaculoT4, obstaculoT5, obstaculoT6, obstaculoT7, obstaculoT8, obstaculoT9);
  obstaculosTipo3.push(obstaculoR1, obstaculoR2, obstaculoR3, obstaculoR4);
  obstaculosTipo4.push(obstaculoB1, obstaculoB2);
  obstaculosTipo5.push(obstaculoF1, obstaculoF2, obstaculoF3, obstaculoF4, obstaculoF5, obstaculoF6, obstaculoF7, obstaculoF8);

  document.addEventListener('keydown', personaje.control);
  document.addEventListener('keydown', personaje2.control);

  submit=document.getElementById("submit");
  submit.addEventListener("click",mostrar_formulario);
  submit2=document.getElementById("submit2");
  submit2.addEventListener("click",mostrar_formulario2);

  video=document.getElementById("video");
  video.addEventListener("ended",terminar);

  x = 0;
  score = 0;

  setInterval(refrescarPantalla, 15);

}

var zonaJuego = {
  startGame : function(){
    zonaJuego.canvas = document.getElementById('canvas');
        if (zonaJuego.canvas

          && zonaJuego.canvas.getContext){
            zonaJuego.ctx = zonaJuego.canvas.getContext('2d');
          }
    }
}
function terminar(){
  video.style.display="none";
}

function jugadores(n) {
  numero_jugadores = n;
  document.getElementById("B2").style.display = "none";
  document.getElementById("B1").style.display = "none";
  document.getElementById("B3").style.display="none";
  if (n==1){
    document.getElementById("formulario").style.display="block";
  }
  if (n==2){
    document.getElementById("formulario2").style.display="block";
  }

}
function mostrar_formulario() {
  nombre1 = document.getElementById("personajef1").value;
  document.getElementById("B3").style.display="none";
  document.getElementById("formulario").style.display="none";
  submit_pulsado = 1;
}
function mostrar_formulario2() {
  nombre1 = document.getElementById("personaje1").value;
  nombre2 = document.getElementById("personaje2").value;
  document.getElementById("B3").style.display="none";
  document.getElementById("formulario2").style.display="none";
  submit_pulsado = 1;
}
function volver_a_jugar(){
    personaje.reset();
    personaje2.reset();

    zonaJuego.startGame();
    document.getElementById("B2").style.display = "block";
    document.getElementById("B1").style.display = "block";
    document.getElementById("B3").style.display = "none";
    submit_pulsado=0;
	variable_ganar=0;
}
function ganar(){
	has_ganado= new Texto(260, 350, "red", "HAS GANADO!!!!!");
	has_ganado.dibujar();
	document.getElementById("B3").style.display = "block";
	text_max_score= new Texto(260, 390, "white", "SCORE :" + score);
    text_max_score.dibujar();
    audioBG.pause();
    audioBG.currentTime = 0;
    fondo.image.src= 'imagen/fondo2.jpg';

    if (window.localStorage){
		var max_score = window.localStorage.getItem("Max Score");
		var last_score = score;

    if(last_score > max_score){
       window.localStorage.setItem("Max Score", last_score);
       text_max_score.text = "NUEVO RECORD  " + max_score;

     }
    }

}

function gameover(){
  game_over= new Texto(260, 350, "red", "GAME OVER");
  game_over.dibujar();
  document.getElementById("B3").style.display = "block";
  text_max_score= new Texto(260, 390, "white", "SCORE :" + score);
  text_max_score.dibujar();
  audioBG.pause();
  audioBG.currentTime = 0;
  fondo.image.src= 'imagen/fondo2.jpg';

  if (window.localStorage){
    var max_score = window.localStorage.getItem("Max Score");
    var last_score = score;

    if(last_score > max_score){
       window.localStorage.setItem("Max Score", last_score);
       text_max_score.text = "NUEVO RECORD  " + max_score;

     }
    }
}



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function refrescarPantalla() {
    zonaJuego.ctx.clearRect(0, 0, zonaJuego.canvas.width, zonaJuego.canvas.height);
    fondo.dibujar();
    if(numero_jugadores == 0) titulo.dibujar();

    if(numero_jugadores != 0 && (personaje.hits > 0 && personaje2.hits > 0)&&(submit_pulsado===1)&&(variable_ganar===0)){
      audioBG.play();

  		if(audioBG.currentTime > 0 && audioBG.currentTime < 5 ) {
          inicio= new Texto(200, 140, "white", "Sobrevive!");
          inicio.dibujar();
  		}
      if(audioBG.currentTime > 5 && audioBG.currentTime < 10 ) {
          inicio2= new Texto(200, 140, "red", "NIVEL 1");
          inicio2.dibujar();
          inicio= new Texto(200, 240, "orange", "Buena suerte...");
          inicio.dibujar();
  		}
  		if(audioBG.currentTime > 10 && audioBG.currentTime < 15 ) {
  			reset_pintar_colisionar(obstaculosTipoReset,obstaculosTipoL1);

        if(audioBG.currentTime > 12){
        bien= new Texto(420, 140, "white", "Bien hecho!");
        bien.dibujar();
        }

  		}
  		else if(audioBG.currentTime > 15  && audioBG.currentTime < 20){
  			reset_pintar_colisionar(obstaculosTipo2,obstaculosTipo1);
  		}
  		else if(audioBG.currentTime > 20  && audioBG.currentTime < 25){
  			reset_pintar_colisionar(obstaculosTipo1,obstaculosTipo2);
  		}
  		else if(audioBG.currentTime > 25  && audioBG.currentTime < 30){

  			reset_pintar_colisionar(obstaculosTipo2,obstaculosTipo1);
  			reset_pintar_colisionar(obstaculosTipo3,obstaculosTipoReset);
  		}
  		else if(audioBG.currentTime > 31  && audioBG.currentTime < 35){
  			fondo.image.src= 'imagen/fondo5.png';
  			reset_pintar_colisionar(obstaculosTipoReset,obstaculosTipo2);
  			reset_pintar_colisionar(obstaculosTipo4,obstaculosTipo3);
  		}
  		else if(audioBG.currentTime > 35  && audioBG.currentTime < 40){
  			reset_pintar_colisionar(obstaculosTipo2,obstaculosTipo1);
  			reset_pintar_colisionar(obstaculosTipo5,obstaculosTipo4);
  			for (i = 0; i < obstaculosTipo5.length; i += 1) {
  				if(i%2 == 0)  obstaculosTipo5[i].width += 10;
  				if(i%2 != 0)  obstaculosTipo5[i].height += 10;
  			}
  		}
  		else if(audioBG.currentTime > 40  && audioBG.currentTime < 47){
  			nivel2= new Texto(200, 140, "blue", "NIVEL 2");
  			nivel2.dibujar();

  			if(audioBG.currentTime > 43 && audioBG.currentTime < 47){
  				vamos= new Texto(200, 240, "white", "Vamos a apretar las tuercas...");
  				vamos.dibujar();
  			}

  			for (i = 0; i < obstaculosTipo5.length; i += 1) {
  				obstaculosTipo5[i].reset();
  				obstaculosTipo5[i].random();
  			}
  		}
  		else if(audioBG.currentTime > 47  && audioBG.currentTime < 52){

  			reset_pintar_colisionar(obstaculosTipo5,obstaculosTipoReset);
  			for (i = 0; i < obstaculosTipo5.length; i += 1) {
          if(i%2 == 0) obstaculosTipo5[i].width=obstaculosTipo5[i].width+7;
  		  }

  			if(audioBG.currentTime > 49 && audioBG.currentTime < 52){
  				casi= new Texto(250, 340, "red", "CUIDADO");
  				casi.dibujar();
  			}
  		}
  		else if(audioBG.currentTime > 52  && audioBG.currentTime < 57){
  			reset_pintar_colisionar(obstaculosTipo4,obstaculosTipo2);
  			reset_pintar_colisionar(obstaculosTipo1,obstaculosTipoReset);
  			for (i = 0; i < obstaculosTipo1.length; i += 1) {
  			     if(i%2 == 0)  obstaculosTipo1[i].height -= 0.1;
  			}

  			if(audioBG.currentTime > 55 && audioBG.currentTime < 57){
  				as= new Texto(150, 140, "white", "Vaya musicote (?)");
  				as.dibujar();
  			}
  		}
  		else if(audioBG.currentTime > 57  && audioBG.currentTime < 62){
  			for (i = 0; i < obstaculosTipo1.length; i += 1) {
  				obstaculosTipo1[i].reset();
  			}
  			reset_pintar_colisionar(obstaculosTipo2,obstaculosTipo4);
  		}
  		else if(audioBG.currentTime > 62  && audioBG.currentTime < 68){
  			reset_pintar_colisionar(obstaculosTipo4,obstaculosTipoReset);
  			reset_pintar_colisionar(obstaculosTipo2,obstaculosTipoReset);
  			if(audioBG.currentTime > 64 && audioBG.currentTime < 68){
  			derecha= new Texto(420, 140, "red", "A LA DERECHA!");
  			derecha.dibujar();
  			}

  		}
  		else if(audioBG.currentTime > 68  && audioBG.currentTime < 73){
  			for (i = 0; i < obstaculosTipo3.length; i += 1) {
  				obstaculosTipo3[i].random();
  			}
        fondo.image.src= 'imagen/fondo1.png';
  			reset_pintar_colisionar(obstaculosTipo3,obstaculosTipoReset);
  		}
  		else if(audioBG.currentTime > 73  && audioBG.currentTime < 78){
  			for (i = 0; i < obstaculosTipo1.length; i += 1) {
  				obstaculosTipo1[i].dibujar();
  				if(numero_jugadores===1){
  				personaje.collision(obstaculosTipo1[i]);
  				}
  				if(numero_jugadores===2){
  					personaje.collision(obstaculosTipo1[i]);
  					personaje2.collision(obstaculosTipo1[i]);
  				}
  			}
  			for (i = 0; i < obstaculosTipo2.length; i += 1) {
  					obstaculosTipo2[i].reset();
  			}
  			for (i = 0; i < obstaculosTipo1.length; i += 1) {
  				obstaculosTipo1[i].dibujar();
  				if(numero_jugadores===1){
  					personaje.collision(obstaculosTipo1[i]);
  				}
  				if(numero_jugadores===2){
  					personaje.collision(obstaculosTipo1[i]);
  					personaje2.collision(obstaculosTipo1[i]);
  				}
  			}

  			for (i = 0; i < obstaculosTipo2.length; i += 1) {
  				obstaculosTipo2[i].reset();
  			}
  			for (i = 0; i < obstaculosTipo5.length; i += 1) {
  				obstaculosTipo5[i].reset();
  				obstaculosTipo5[i].random();
  			}

  			if(audioBG.currentTime > 76 && audioBG.currentTime < 78){
  				for (i = 0; i < obstaculosTipo3.length; i += 1) {
  					obstaculosTipo3[i].dibujar();
  					if(numero_jugadores===1){
  						personaje.collision(obstaculosTipo3[i]);
  					}
  					if(numero_jugadores===2){
  						personaje.collision(obstaculosTipo3[i]);
  						personaje2.collision(obstaculosTipo3[i]);
  					}
  				}
  			}
  		}
  		else if(audioBG.currentTime > 78  && audioBG.currentTime < 83){
  			for (i = 0; i < obstaculosTipo1.length; i += 1) {
  				obstaculosTipo1[i].reset();
  			}
  			for (i = 0; i < obstaculosTipo3.length; i += 1) {
  				obstaculosTipo3[i].reset();
  			}
  			for (i = 0; i < obstaculosTipo4.length; i += 1) {
  				obstaculosTipo4[i].dibujar();
  				if(numero_jugadores===1){
  					personaje.collision(obstaculosTipo1[i]);
  				}
  				if(numero_jugadores===2){
  					personaje.collision(obstaculosTipo1[i]);
  					personaje2.collision(obstaculosTipo1[i]);
  				}

  			}

  			if(audioBG.currentTime > 80 && audioBG.currentTime < 83){
  				for (i = 0; i < obstaculosTipo2.length; i += 1) {
  					obstaculosTipo2[i].dibujar();
  					if(numero_jugadores===1){
  						personaje.collision(obstaculosTipo2[i]);
  					}
  					if(numero_jugadores===2){
  						personaje.collision(obstaculosTipo2[i]);
  						personaje2.collision(obstaculosTipo2[i]);
  					}
  				if(i%2 == 0) obstaculosTipo2[i].width++;
  				}
  			}

  			if(audioBG.currentTime > 86 && audioBG.currentTime < 88){
  				for (i = 0; i < obstaculosTipo5.length; i += 1) {
  				obstaculosTipo5[i].dibujar();
  					if(numero_jugadores===1){
  						personaje.collision(obstaculosTipo5[i]);
  					}
  					if(numero_jugadores===2){
  						personaje.collision(obstaculosTipo5[i]);
  						personaje2.collision(obstaculosTipo5[i]);
  					}
  				}
  			}
  			obstaculoB1.dibujar();
  			obstaculoB1.width ++;
  			obstaculoB1.height ++;
  			personaje.collision(obstaculoB1);
  		}
  		else if(audioBG.currentTime > 83  && audioBG.currentTime < 88){
  			for (i = 0; i < obstaculosTipo2.length; i += 1) {
  				obstaculosTipo2[i].reset();
  			}
  			for (i = 0; i < obstaculosTipo5.length; i += 1) {
  				obstaculosTipo5[i].reset();
  				obstaculosTipo5[i].random();
  			}
  			for (i = 0; i < obstaculosTipo1.length; i += 1) {
  				obstaculosTipo3[i].dibujar();
  				if(numero_jugadores===1){
  				personaje.collision(obstaculosTipo1[i]);
  				}
  				if(numero_jugadores===2){
  				personaje.collision(obstaculosTipo1[i]);
  				personaje2.collision(obstaculosTipo1[i]);
  				}
  				obstaculosTipo3[i].gravitySpeedX += 0.002;
  				//personaje2.collision(obstaculosTipo3[i]);
  			}
  			for (i = 0; i < obstaculosTipo4.length; i += 1) {
  				obstaculosTipo4[i].reset();
  			}
  			if(audioBG.currentTime > 90 && audioBG.currentTime < 93){
  				for (i = 0; i < obstaculosTipo5.length; i += 1) {
  					obstaculosTipo5[i].dibujar();
  					if(numero_jugadores===1){
  						personaje.collision(obstaculosTipo5[i]);
  					}
  					if(numero_jugadores===2){
  						personaje.collision(obstaculosTipo5[i]);
  						personaje2.collision(obstaculosTipo5[i]);
  					}
  				}
  			}
  		}
  		else if(audioBG.currentTime > 88  && audioBG.currentTime < 93){
  			for (i = 0; i < obstaculosTipo3.length; i += 1) {

  				obstaculosTipo3[i].random();
  			}
  			reset_pintar_colisionar(obstaculosTipo4,obstaculosTipo3);
  			reset_pintar_colisionar(obstaculosTipo2,obstaculosTipoReset);
  		}
  		else if(audioBG.currentTime > 93  && audioBG.currentTime < 98){
  			for (i = 0; i < obstaculosTipo4.length; i += 1) {
  				obstaculosTipo4[i].random();
  			}
  			for (i = 0; i < obstaculosTipo2.length; i += 1) {
  				obstaculosTipo2[i].random();
  			}
  			reset_pintar_colisionar(obstaculosTipo3,obstaculosTipoReset);
  			reset_pintar_colisionar(obstaculosTipo1,obstaculosTipoReset);

  			if(audioBG.currentTime > 95  && audioBG.currentTime < 98){
  				reset_pintar_colisionar(obstaculosTipo5,obstaculosTipoReset);
  			}
  			obstaculoB1.reset();

  		}
  		else if(audioBG.currentTime > 98  && audioBG.currentTime < 103){
  				obstaculoB1.dibujar();
  				personaje.collision(obstaculoB1);
  				obstaculoB1.width ++;
  				obstaculoB1.height ++;
  				obstaculoB1.speedY += 0.02;

  				reset_pintar_colisionar(obstaculosTipo4,obstaculosTipoReset);
  		}
  		else if(audioBG.currentTime > 103  && audioBG.currentTime < 108){
  			for (i = 0; i < obstaculosTipo1.length; i += 1) {
  				obstaculosTipo1[i].reset();
  			}
  			obstaculoB1.reset();
  			obstaculoL2.random();
  			obstaculoL2.dibujar();
  			if(numero_jugadores===1){
  				personaje.collision(obstaculoL2);
  			}
  			if(numero_jugadores===2){
  				personaje.collision(obstaculoL2);
  				personaje2.collision(obstaculoL2);
  			}
  		}
  		else if(audioBG.currentTime > 108  && audioBG.currentTime < 109){
  			obstaculoL2.reset();
  			obstaculoF8.dibujar();
  			if(numero_jugadores===1){
  				personaje.collision(obstaculoF8);
  			}
  			if(numero_jugadores===2){
  				personaje.collision(obstaculoF8);
  				personaje2.collision(obstaculoF8);
  			}
  		}
  		else if(audioBG.currentTime > 109  && audioBG.currentTime < 110){
  			obstaculoF8.reset();
  			obstaculoB1.dibujar();
  			if(numero_jugadores===1){
  				personaje.collision(obstaculoB1);
  			}
  			if(numero_jugadores===2){
  				personaje.collision(obstaculoB1);
  				personaje2.collision(obstaculoB1);
  			}
  		}
  		else if(audioBG.currentTime > 111  && audioBG.currentTime < 117){
  			fondo.image.src= 'imagen/fondo.png';
  		}
  		else if(audioBG.currentTime > 115  && audioBG.currentTime < 120){
  			nivel3= new Texto(150, 140, "white", "Nivel 3");
  			nivel3.dibujar();
  		}
  		else if(audioBG.currentTime > 121  && audioBG.currentTime < 122){
        reset_pintar_colisionar(obstaculosTipo2,obstaculosTipo1);
  			reset_pintar_colisionar(obstaculosTipo5,obstaculosTipo4);
  			for (i = 0; i < obstaculosTipo5.length; i += 1) {
  				if(i%2 == 0)  obstaculosTipo5[i].width += 10;
  				if(i%2 != 0)  obstaculosTipo5[i].height += 10;
  			}
  		}
      else if(audioBG.currentTime > 122  && audioBG.currentTime < 124){
        reset_pintar_colisionar(obstaculosTipo5,obstaculosTipoReset);
        for (i = 0; i < obstaculosTipo5.length; i += 1) {
          if(i%2 == 0) obstaculosTipo5[i].width=obstaculosTipo5[i].width+7;
        }
      }
      else if(audioBG.currentTime > 124  && audioBG.currentTime < 126){
        for (i = 0; i < obstaculosTipo1.length; i += 1) {
          obstaculosTipo1[i].reset();
        }
        reset_pintar_colisionar(obstaculosTipo2,obstaculosTipo4);
      }
      else if(audioBG.currentTime > 126  && audioBG.currentTime < 129){
        reset_pintar_colisionar(obstaculosTipo4,obstaculosTipoReset);
        reset_pintar_colisionar(obstaculosTipo2,obstaculosTipoReset);
        if(audioBG.currentTime > 127 && audioBG.currentTime < 129){
          for (i = 0; i < obstaculosTipo5.length; i += 1) {
    				if(i%2 == 0)  obstaculosTipo5[i].width += 10;
    				if(i%2 != 0)  obstaculosTipo5[i].height += 10;
    			}
        }
      }
      else if(audioBG.currentTime > 129  && audioBG.currentTime < 132){
        reset_pintar_colisionar(obstaculosTipo2,obstaculosTipo1);
      }
      else if(audioBG.currentTime > 132  && audioBG.currentTime < 134){
        reset_pintar_colisionar(obstaculosTipo1,obstaculosTipo2);
      }
      else if(audioBG.currentTime > 134  && audioBG.currentTime < 136){

        reset_pintar_colisionar(obstaculosTipo2,obstaculosTipo1);
        reset_pintar_colisionar(obstaculosTipo3,obstaculosTipoReset);
      }
      else if(audioBG.currentTime > 136  && audioBG.currentTime < 138){
        reset_pintar_colisionar(obstaculosTipoReset,obstaculosTipo2);
        reset_pintar_colisionar(obstaculosTipo4,obstaculosTipo3);
      }
      else if(audioBG.currentTime > 138  && audioBG.currentTime < 140){
        reset_pintar_colisionar(obstaculosTipo2,obstaculosTipo1);
        reset_pintar_colisionar(obstaculosTipo5,obstaculosTipo4);
        for (i = 0; i < obstaculosTipo5.length; i += 1) {
          if(i%2 == 0)  obstaculosTipo5[i].width += 20;
          if(i%2 != 0)  obstaculosTipo5[i].height += 20;
        }
      }
      else if(audioBG.currentTime > 140  && audioBG.currentTime < 142){
  			for (i = 0; i < obstaculosTipo4.length; i += 1) {
  				obstaculosTipo4[i].random();
  			}
  			for (i = 0; i < obstaculosTipo2.length; i += 1) {
  				obstaculosTipo2[i].random();
  			}
  			reset_pintar_colisionar(obstaculosTipo3,obstaculosTipoReset);
  			reset_pintar_colisionar(obstaculosTipo1,obstaculosTipoReset);
      }
  		else	if(audioBG.currentTime > 142  && audioBG.currentTime < 144){
          fondo.image.src= 'imagen/fondo7.jpg';
  				reset_pintar_colisionar(obstaculosTipo5,obstaculosTipoReset);

  			obstaculoB1.reset();

  		}
  		else if(audioBG.currentTime > 144  && audioBG.currentTime < 147){
  				obstaculoB1.dibujar();
  				personaje.collision(obstaculoB1);
  				obstaculoB1.width ++;
  				obstaculoB1.height ++;
  				obstaculoB1.speedY += 0.02;

  				reset_pintar_colisionar(obstaculosTipo4,obstaculosTipoReset);
  		}
  		else if(audioBG.currentTime > 147  && audioBG.currentTime < 149){
  			for (i = 0; i < obstaculosTipo1.length; i += 1) {
  				obstaculosTipo1[i].reset();
  			}
  			obstaculoB1.reset();
  			obstaculoL2.random();
  			obstaculoL2.dibujar();
  			if(numero_jugadores===1){
  				personaje.collision(obstaculoL2);
  			}
  			if(numero_jugadores===2){
  				personaje.collision(obstaculoL2);
  				personaje2.collision(obstaculoL2);
  			}
  		}
  		else if(audioBG.currentTime > 149  && audioBG.currentTime < 151){
  			obstaculoL2.reset();
  			obstaculoF8.dibujar();
  			if(numero_jugadores===1){
  				personaje.collision(obstaculoF8);
  			}
  			if(numero_jugadores===2){
  				personaje.collision(obstaculoF8);
  				personaje2.collision(obstaculoF8);
  			}
  		}
  		else if(audioBG.currentTime > 151  && audioBG.currentTime < 153){
  			obstaculoF8.reset();
  			obstaculoB1.dibujar();
  			if(numero_jugadores===1){
  				personaje.collision(obstaculoB1);
  			}
  			if(numero_jugadores===2){
  				personaje.collision(obstaculoB1);
  				personaje2.collision(obstaculoB1);
  			}
  		}
      else if(audioBG.currentTime > 153  && audioBG.currentTime < 157){
  			for (i = 0; i < obstaculosTipo1.length; i += 1) {
  				obstaculosTipo1[i].reset();
  			}
  			for (i = 0; i < obstaculosTipo3.length; i += 1) {
  				obstaculosTipo3[i].reset();
  			}
  			for (i = 0; i < obstaculosTipo4.length; i += 1) {
  				obstaculosTipo4[i].dibujar();
  				if(numero_jugadores===1){
  					personaje.collision(obstaculosTipo1[i]);
  				}
  				if(numero_jugadores===2){
  					personaje.collision(obstaculosTipo1[i]);
  					personaje2.collision(obstaculosTipo1[i]);
  				}

  			}

  			if(audioBG.currentTime > 154 && audioBG.currentTime < 157){
  				for (i = 0; i < obstaculosTipo2.length; i += 1) {
  					obstaculosTipo2[i].dibujar();
  					if(numero_jugadores===1){
  						personaje.collision(obstaculosTipo2[i]);
  					}
  					if(numero_jugadores===2){
  						personaje.collision(obstaculosTipo2[i]);
  						personaje2.collision(obstaculosTipo2[i]);
  					}
  				if(i%2 == 0) obstaculosTipo2[i].width++;
  				}
  			}
      }
      else if(audioBG.currentTime > 157  && audioBG.currentTime < 159){
  			for (i = 0; i < obstaculosTipo3.length; i += 1) {

  				obstaculosTipo3[i].random();
  			}
  			reset_pintar_colisionar(obstaculosTipo4,obstaculosTipo3);
  			reset_pintar_colisionar(obstaculosTipo2,obstaculosTipoReset);
  		}
  		else if(audioBG.currentTime > 159  && audioBG.currentTime < 161){
  			for (i = 0; i < obstaculosTipo4.length; i += 1) {
  				obstaculosTipo4[i].random();
  			}
  			for (i = 0; i < obstaculosTipo2.length; i += 1) {
  				obstaculosTipo2[i].random();
  			}
  			reset_pintar_colisionar(obstaculosTipo3,obstaculosTipoReset);
  			reset_pintar_colisionar(obstaculosTipo1,obstaculosTipoReset);
      }
  		else	if(audioBG.currentTime > 161  && audioBG.currentTime < 163){
  				reset_pintar_colisionar(obstaculosTipo5,obstaculosTipoReset);

  			obstaculoB1.reset();

  		}
		else if(audioBG.currentTime > 163 && audioBG.currentTime < 165 ) {
  			reset_pintar_colisionar(obstaculosTipoReset,obstaculosTipoL1);

			if(audioBG.currentTime > 164){
        bien= new Texto(420, 140, "white", "Bien hecho!");
        bien.dibujar();
        //if(audioBG.currentTime > 165) numero_jugadores = 0;
			//}

			}
		}
		else if(audioBG.currentTime >165){

			variable_ganar=1;
		}

      vida.dibujar();
      if(personaje.hits > 0) {
         personaje.dibujar();
         puntosSalud.text = personaje.hits;
         puntosSalud.dibujar();
         puntosSalud_nombre.text = nombre1;
         puntosSalud_nombre.dibujar();
         personaje.score ++;
         score = personaje.score;
         puntuacion.text = "SCORE:  " + score;
         puntuacion.dibujar();
      }
      if((numero_jugadores ==2)&&(personaje2.hits > 0)){
         personaje2.dibujar();
         puntosSalud2.text = personaje2.hits;
         puntosSalud2.dibujar();
         puntosSalud_nombre2.text = nombre2;
         puntosSalud_nombre2.dibujar();
         score += personaje2.score;
      }



	}
    else if( variable_ganar == 0){
		if (numero_jugadores !== 0  && submit_pulsado == 1){
			gameover();
		}
	}
	else if(variable_ganar == 1){
		if (numero_jugadores !== 0 ){
			ganar();
		}
	}


}


Jugador = function(x, y, width, height, pj){ //Constructor del jugador
  //that = this;
    this.pj = pj;
    this.hits = 10;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.score = 0;
    this.t_cartel_colision=0;

    this.image1 = new Image();
    this.image2 = new Image();
    this.image3 = new Image();
  	this.image4 = new Image();
    this.sprite_personaje = 0;
    if(this.pj ==1){
  	this.image1.src = 'imagen/AI1.png';
  	this.image2.src = 'imagen/BI1.png';
  	this.image3.src = 'imagen/AD1.png';
  	this.image4.src = 'imagen/BD1.png';
    }
    if(this.pj ==2){
  	this.image1.src = 'imagen/AI2.png';
  	this.image2.src = 'imagen/BI2.png';
  	this.image3.src = 'imagen/AD2.png';
  	this.image4.src = 'imagen/BD2.png';
    }

    this.audioCol = document.getElementById("colision");
    this.audioPar = document.getElementById("colision2");

    this.speedX = 0;
    this.speedY = 0;

    this.reset = function(){
      this.x = x;
      this.y = y;
      this.speedX = 0;
      this.speedY = 0;
      this.score = 0;
      this.hits = 10;
      //importante dejar numero jugadores como 0, sino al hacer el reset, empiezas a puntuar antes de JUGAR
      numero_jugadores = 0;
      this.comprobacion=0;
    }

    this.move = function(){  //MOVIMIENTO
      this.x += this.speedX;
      this.y += this.speedY;
    }

    this.paredesCanvas = function(){
      if (this.y < 0){
        this.y = 0;
        this.hits --;
      }
     if (this.y > (zonaJuego.canvas.height - this.height)){
        this.y  = zonaJuego.canvas.height - this.height;
        this.hits --;
      }
      if((this.x + this.width) > zonaJuego.canvas.width){
        this.x = zonaJuego.canvas.width - this.width;
        this.hits --;
      }
      if (this.x < 0){
        this.x = 0;
        this.hits --;
      }
    }



     this.control = (event) => {
        var tecla = event.which || event.keyCode;
        console.log("Pulsada tecla "+ tecla);

      if(this.pj ==1){
       switch (tecla){
          case 38:  // Up arrow was pressed
              this.speedY -= 10;

          break;
          case 37:  // Left arrow was pressed
              this.speedX -= 10;
              this.sprite_personaje=0;
          break;

          case 39:  // Right arrow was pressed
              this.speedX += 10;
              this.sprite_personaje=3;
          break;
          case 40:  // Down arrow was pressed
              this.speedY += 10;

          break;
        }
      }
      else if(this.pj== 2){
        switch (tecla){
          case 87:  // W arrow was pressed
              this.speedY -= 10;

          break;
          case 65:  // A arrow was pressed
              this.speedX -= 10;
              this.sprite_personaje=0;
          break;

          case 68:  // D arrow was pressed
              this.speedX += 10;
              this.sprite_personaje=3;
          break;
          case 83:  // S arrow was pressed
              this.speedY += 10;

          break;
      }
    }
  }
      this.dibujar = function(){
        this.move();
        this.paredesCanvas();
        this.speedX = this.speedX * 0.6;
        this.speedY = this.speedY * 0.6;
		if (this.pj==1){
			if(contador_cambiar_alas1!=0){
				contador_cambiar_alas1 = contador_cambiar_alas1-1;
			}
			else if(contador_cambiar_alas1==0){
				contador_cambiar_alas1 = 5;
				if(this.sprite_personaje==0){
					this.sprite_personaje=1;
				}
				else if(this.sprite_personaje==1){
					this.sprite_personaje=0;
				 }
				 else if(this.sprite_personaje==2){
					this.sprite_personaje=3;
				 }
				 else if(this.sprite_personaje==3){
					this.sprite_personaje=2;
				 }
			}
		}
		else if(this.pj==2){
			if(contador_cambiar_alas2!=0){
				contador_cambiar_alas2 = contador_cambiar_alas2-1;
			}
			else if(contador_cambiar_alas2==0){
				contador_cambiar_alas2 = 5;
				if(this.sprite_personaje==0){
					this.sprite_personaje=1;
				}
				else if(this.sprite_personaje==1){
					this.sprite_personaje=0;
				 }
				 else if(this.sprite_personaje==2){
					this.sprite_personaje=3;
				 }
				 else if(this.sprite_personaje==3){
					this.sprite_personaje=2;
				 }
			}
		}
        switch (this.sprite_personaje){
          case 0:  // up arrow was pressed
              zonaJuego.ctx.drawImage(this.image1, this.x, this.y, this.width, this.height);
          break;
          case 1:  // left arrow was pressed
              zonaJuego.ctx.drawImage(this.image2, this.x, this.y, this.width, this.height);
          break;
          case 2:  // right arrow was pressed
              zonaJuego.ctx.drawImage(this.image3, this.x, this.y, this.width, this.height);
          break;
          case 3:  // down arrow was pressed
              zonaJuego.ctx.drawImage(this.image4, this.x, this.y, this.width, this.height);
          break;
      }

      }


      this.collision = function(obstaculo){
          if ( this.x + this.width > obstaculo.x && this.x < obstaculo.x + obstaculo.width && this.height + this.y > obstaculo.y && this.y < obstaculo.y + obstaculo.height) {
            this.t_cartel_colision=30;
            if(this.t_cartel_colision>0){
              blood.dibujar();
              if(this.pj==1){
                colision= new Texto(100, 200, "red", nombre1 + " te has chocado!!!",40);
                colision.dibujar();
              }
              if(this.pj==2){
                colision= new Texto(100, 280, "red", nombre2 + " te has chocado!!!",40);
                colision.dibujar();
              }

              this.t_cartel_colision--;
            }
              if(this.comprobacion!=1){
                console.log("Aqui se produce colision " + x +" colision con obstaculo: "+ obstaculo.id);
                this.hits--;
                this.score -= 100;
                this.id_obstaculo = obstaculo.id;
                this.audioCol.play();
              }
              this.comprobacion=1;
        }
        else{
          if(this.id_obstaculo == obstaculo.id){
            this.comprobacion=0;
          }
        }
    }

}

  Obstaculo = function(x, y, width, height, speedX, speedY, accelerationX, accelerationY, image, id){ //Constructor de obstáculos
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.speedX = speedX;
    this.speedY = speedY;

    this.accelerationX = accelerationX;
    this.accelerationY = accelerationY;
    this.gravitySpeedX = 0;
    this.gravitySpeedY = 0;

    this.image = new Image();
    this.image.src = image;

    this.id = id;

    this.reset = function(){
      this.x = x;
      this.y = y;
      this.gravitySpeedX = 0;
      this.gravitySpeedY = 0;
      this.width = width;
      this.height = height;
    }
    this.random = function(){
      this.x = getRandomInt(320);
      this.y = getRandomInt(400);
    }

    this.dibujar = function(){
      this.move();
      zonaJuego.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    this.move = function(){
      this.gravitySpeedY += this.accelerationY; //Aceleración en la vertical
      this.gravitySpeedX += this.accelerationX; //Aceleración en la horizontal

      this.x += this.speedX + this.gravitySpeedX;
      this.y += this.speedY + this.gravitySpeedY;
    }
  }

  Texto = function(x, y, color, texto, tamano=35){
    this.x = x;
    this.y = y;
    this.text = texto;
    this.tamano=String(tamano+"px");

    this.dibujar = function(){
      zonaJuego.ctx.font = "bold "+this.tamano+" Arial" ;
      zonaJuego.ctx.fontSize = "100px";
      zonaJuego.ctx.fillStyle = color;
      zonaJuego.ctx.fillText(this.text, this.x, this.y);
      zonaJuego.ctx.restore();
    }
  }

  Background = function(x, y, width, height, image){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.image = new Image();
    this.image.src = image;

    this.dibujar = function(){
      zonaJuego.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }


}

function reset_pintar_colisionar(obstaculo_actual,obstaculo_anterior){
for (i = 0; i < obstaculo_anterior.length; i += 1) {
        obstaculo_anterior[i].reset();
      }
      for (i = 0; i < obstaculo_actual.length; i += 1) {
        obstaculo_actual[i].dibujar();
        if(numero_jugadores===1){
          personaje.collision(obstaculo_actual[i]);
        }
        if(numero_jugadores===2){
          personaje.collision(obstaculo_actual[i]);
          personaje2.collision(obstaculo_actual[i]);
        }
      }
}
