//  var bolinhas
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;
let velXBolinha = 6;
let velYBolinha = 6;

// var raquete
let xRaquete = 5;
let yRaquete = 150;
let compRaquete = 10;
let altRaquete = 90;

//velocidade da raquete
let velXRaquete = 4
let velYRaquete = 5;

// var do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velYOponente;

// var pontos
let meusPontos = 0;
let pontosOponente = 0;

let colidiu = false;

let chanceDeErrar = 0;


function setup() {
  createCanvas(600, 400);
}

  function draw() {
    background(0); 
    viewBolinha();
    movimentBolinha();
    verifBorda(); 
    mostraRaquete(xRaquete,yRaquete);
    movimentRaquete();
    //verificacolisao();
    verifColisaoRaquete(xRaquete,yRaquete);  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentRaqueteOponente();    verifColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
     incluiPlacar();
     marcaPonto(); 
  }

function viewBolinha(){  circle(xBolinha,yBolinha,diametro); 
}
function movimentBolinha(){ 
 xBolinha += velXBolinha;
 yBolinha += velYBolinha;
}

function mostraRaquete(x,y){              rect(x,y,compRaquete,altRaquete);
}


function movimentRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
   if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
}
}
function verifColisaoRaquete(){
  if(xBolinha - raio < xRaquete + compRaquete &&  yBolinha - raio < yRaquete + altRaquete && yBolinha + raio > yRaquete){
    velXBolinha *= -1
  }
}
 function movimentRaqueteOponente(){
    velYOponente = yBolinha -yRaqueteOponente - compRaquete / 2 - 30;
  yRaqueteOponente += velYOponente + chanceDeErrar
   calculaChanceDeErrar();
 }

function calculaChanceDeErrar(){
  if(pontosOponente >= meusPontos){
    chanceDeErrar += 1
    if(chanceDeErrar >= 39){
      chanceDeErrar = 40;
    }
  }
  else{
    chanceDeErrar -= 1
    if(chanceDeErrar <= 35){
      chanceDeErrar = 35
    }
  }
}
function verifBorda(){
  if(xBolinha + raio > width || xBolinha - raio < 0){
   velXBolinha *= -1  
 }
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velYBolinha *= -1
  }
}

function verifColisaoRaquete(x,y){
 colidiu =
 collideRectCircle(x,y,compRaquete,altRaquete,xBolinha,yBolinha, raio);
 if(colidiu){
    velXBolinha *= -1  
 }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140, 0));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140,0));
  rect(450,10,40,20)
  fill(255);
  text(pontosOponente, 470,26);
  
}
function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1;
  }if(xBolinha < 10){
    pontosOponente += 1;
  }
}

function bolinhaPresa(){
  if(xBolinha - raio < 0){
    xBolinha = 23;
  }
}