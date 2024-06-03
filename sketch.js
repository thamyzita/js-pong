// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 18;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha=8
let velocidadeYBolinha = 8;

// variaveis da raquete
let Raquete = 5;
let yRaquete=150
let raquetcomprimento= 10
let raqueteAltura = 100;

// variaveis da raquete do oponente

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

// placar do jogo

let meusPontos = 0;
let pontosDoOponente = 0;

// Sons do jogo

let raquetada;
let ponto;
let trilha;

// Chance de errar do oponente

let chanceDeErrar = 0

function preload() {
trilha = loadSound("trilha.mp3");
ponto = loadSound("ponto.mp3");
raquetada = loadSound("raquetada.mp3");
}

function setup () 
createCanvas (600, 400);
trilha. 100p();
}
function drawo
background("black"):
mostraBolinhal;
movimentaBolinhal):
verificaColisao Bordas():
mostraRaquete(xRaquete, Raquete);
movimentaMinhaRaquete():
IlverificaColisaocomRaquete()
mostraRaquete(xRaqueteOponente, yRaqueteOponente):
movimentaRaqueteOponente):

verificaColisaoRaquete Biblioteca(xRaquete
, yRaquete);

verifica ColisaoRaquete Biblioteca(xRaquete
Oponente, RaqueteOponente):
incluiPlacar():
marcaPonto()
}
function mostraBolinha() {
xBolinha += velocidadeXBolinha;
yBolinha += velocidadeYBolinha;
}

function verificaColisaoBordas() {
if (xBolinha > width - raio || xBolinha <
raio) {
velocidadeXBolinha *= -1
}
  if (yBolinha > height - raio || Bolinha <
raio) {
velocidadeYBolinha *＝-1；
  }
  }

function mostraRaquete(x, y) {
rect(x, y, raqueteComprimento, raqueteAltura);
function movimentaMinhaRaquete() {
if (keylsDown(UP_ARROW)) (
yRaquete -= 7;
if (keylsDown(DOWN_ARROW)) {
yRaquete += 7;
}
function verificaColisaocomRaquete() {
if (
xBolinha < Raquete +
raquete Comprimento + raio && yBolinha > yRaquete - raio &&
Bolinha < yRaquete + raquete Altura +
raio
  )}
velocidadeXBolinha *= -1;
raquetada.play();
｝
｝
function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
     raquetada.play();
  }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
        raquetada.play();
  }
}

function movimentaRaqueteOponente(){
    if (keyIsDown(87)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(83)){
        yRaqueteOponente += 10;
    }
}


function incluiPlacar(){
  stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255,140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);



}


function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
        ponto.play();
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
        ponto.play();
    }
}


function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

