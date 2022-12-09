imagenes=new Array(
    ['imagen/background1.jpg'],
    ['imagen/background2.jpg'],
    ['imagen/background3.jpg'],
    ['imagen/background4.jpg']
);

function rotarImagenes(){
    var index=Math.floor((Math.random()*imagenes.length));
    document.getElementById("background").style.backgroundImage="url("+imagenes[index]+")";
}

function pagina(){
    hiperbinculo=document.getElementById("hiperbinculo");
    //hiperbinculo.style.display="block";
    hiperbinculo.click();
}
function agrandar(objeto){

    objeto.style.width=objeto.width+30;
    objeto.style.height=objeto.height+30;
}
function empequenecer(objeto){
    objeto.style.width=objeto.width-30;
    objeto.style.height=objeto.height-30;
}
function empequenecer_ovalo(){
  objeto=document.getElementById("ovalo");
  objeto.style.width=objeto.width+objeto.width*0.58;
  objeto.style.height=objeto.height+objeto.height*0.45;
}
function agrandar_ovalo(){
  objeto=document.getElementById("ovalo");
  objeto.style.width=objeto.width+objeto.width*0.60;
  objeto.style.height=objeto.height+objeto.height*0.49;
}

window.onload=function(){
    rotarImagenes();
    setInterval(rotarImagenes,3000);
    canvas_ovalo_trasparente();
    canvas_ovalo();
    canvas_play();
    /*personaje1=document.getElementById("personaje1");
    1.addEventListener("onmouseover",agrandar);*/
    canvas_play_ovalo=document.getElementById("ovalo");
    canvas_play_ovalo.addEventListener("click", pagina);
    canvas_play=document.getElementById("micanvas");
    canvas_play.addEventListener("click", pagina);
    objeto1=document.getElementById("a_tematica");
    objeto1.addEventListener("click",function(){mostrar_section(1)});
    objeto2=document.getElementById("a_instrucciones");
    objeto2.addEventListener("click",function(){mostrar_section(1)});
    objeto3=document.getElementById("a_Cesar");
    objeto3.addEventListener("click",function(){mostrar_section(2)});
    objeto4=document.getElementById("a_Irene");
    objeto4.addEventListener("click",function(){mostrar_section(2)});
    objeto5=document.getElementById("a_Caleb");
    objeto5.addEventListener("click",function(){mostrar_section(2)});
    objeto6=document.getElementById("a_Jaime");
    objeto6.addEventListener("click",function(){mostrar_section(2)});
    objeto7=document.getElementById("a_responsabilidades");
    objeto7.addEventListener("click",function(){mostrar_section(3)});
    objeto8=document.getElementById("a_tecnicasytecnologias");
    objeto8.addEventListener("click",function(){mostrar_section(3)});
    objeto9=document.getElementById("a_problemasydificultades");
    objeto9.addEventListener("click",function(){mostrar_section(3)});
    objeto10=document.getElementById("a_puntosfuertes");
    objeto10.addEventListener("click",function(){mostrar_section(3)});
    objeto11=document.getElementById("a_planificacion");
    objeto11.addEventListener("click",function(){mostrar_section(3)});
    objeto12=document.getElementById("a_referencias");
    objeto12.addEventListener("click",function(){mostrar_section(4)});
    cesar=document.getElementById("cesar");
    cesar.addEventListener("click",function(){mostrar_info(1)});
    irene=document.getElementById("irene");
    irene.addEventListener("click",function(){mostrar_info(2)});
    caleb=document.getElementById("caleb");
    caleb.addEventListener("click",function(){mostrar_info(3)});
    jaime=document.getElementById("jaime");
    jaime.addEventListener("click",function(){mostrar_info(4)});


}

function mostrar_info(n){
  info=document.getElementsByClassName("infoAutores");
  for (i=0;i<info.length;i++){
    info[i].style.display="none";
  }
  document.getElementById(n+"a").style.display="block";
}
function mostrar_section(n){
  secciones=document.getElementsByTagName("section");
  for (i=0;i<secciones.length;i++){
    secciones[i].style.display="none";
  }
  document.getElementById(n+"s").style.display="block";
}


/*  var v=String(m+"s");
  var hola=document.getElementsByClassName("secciones");
  //revisar esta parte porque no furula
  for(i=0; i<hola.length;i++){
    hola[i].style.display="none";
  }
  var seccion=document.getElementById(v);
  seccion.style.display="block";*/


function canvas_play(){
  var canvas=document.getElementById("micanvas");
  if(canvas && canvas.getContext('2d')){
    var ctx=canvas.getContext('2d');
    if(ctx){
      var radio=5;
      var dX=(ctx.canvas.width/4)+(ctx.canvas.width/10);
      ctx.strokeStyle = "grey";
      ctx.beginPath();
      ctx.moveTo(radio+dX,0);
      ctx.lineTo(150+dX,75-radio);
      ctx.quadraticCurveTo(150+radio+dX,75,150+dX,75+radio);
      ctx.lineTo(radio+dX,150);
      ctx.quadraticCurveTo(0+dX,150,0+dX,150-radio);
      ctx.lineTo(0+dX,radio);
      ctx.quadraticCurveTo(0+dX,0,radio+dX,0);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.stroke();
      ctx.font = "175% Century bold";
      ctx.fillStyle = "black";
      ctx.fillText("PLAY",(ctx.canvas.width/4)+((ctx.canvas.width)*1.5/10),(ctx.canvas.height/2)+((ctx.canvas.height)*0.5)/10);
    }
  }else{
    alert("no funcioa");
  }
}
function canvas_ovalo(){
  var canvas=document.getElementById("ovalo");
  if(canvas && canvas.getContext('2d')){
    var ctx=canvas.getContext('2d');
    if(ctx){
          var centroX = ctx.canvas.width/4;//Entre cuatro porque luego hacemos el scale
					var centroY = ctx.canvas.height/2;
					var radio = ctx.canvas.height/2;

					ctx.scale(2, 1);
					ctx.beginPath();
					ctx.arc(centroX,centroY, radio, 0, 2 * Math.PI );
					ctx.strokeStyle = "#4A4A4A";
          ctx.fillStyle = "#4A4A4A";
          ctx.fill();
					ctx.stroke()
    }
  }else{
    alert("no funcioa");
  }
}
function canvas_ovalo_trasparente(){
  var canvas=document.getElementById("ovalo_trasparente");
  if(canvas && canvas.getContext('2d')){
    var ctx=canvas.getContext('2d');
    if(ctx){
          var centroX = ctx.canvas.width/4;//Entre cuatro porque luego hacemos el scale
					var centroY = ctx.canvas.height/2;
					var radio = ctx.canvas.height/2;

					ctx.scale(2, 1);
					ctx.beginPath();
					ctx.arc(centroX,centroY, radio, 0, 2 * Math.PI );
					ctx.strokeStyle = "black";
          ctx.fillStyle = "black";
          ctx.fill();
					ctx.stroke()
    }
  }else{
    alert("esta mierda no funcioa");
  }
}


function ver(n) {
         document.getElementById(n).style.display="block";
         }
function ocultar(n) {
         document.getElementById(n).style.display="none";
         }
