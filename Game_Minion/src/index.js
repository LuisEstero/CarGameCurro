const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "greenLigth";

let miniomImagen = new Image();
miniomImagen.src = "./Imagenes/Minion.png";

let fuegoImagen = new Image();
fuegoImagen.src = "./Imagenes/fuego.png";

let fondo = new Image();
fondo.src= "./Imagenes/fondo.png"

const obstaculos = [];




const miniom = new Objeto(250, 0, 60, 60, miniomImagen, ctx);

const jugar = () => {
  for (let obstaculo of obstaculos) {
    obstaculo.borrar();
    obstaculo.y -= 5;
    obstaculo.dibujar();
    if (miniom.detectarColision(obstaculo)) {
      console.log("Has perdido");
    }
  }
};

const crearObstaculos = () => {
  const randomPositionX = Math.floor(Math.random() * 580);
  const obstaculo = new Objeto(
    randomPositionX,
    570,
    120,
    60,
    fuegoImagen,
    ctx
  );
  obstaculos.push(obstaculo);
};

const cargaInicial = () => {
  miniom.dibujar();
  ctx.drawImage(fondo,miniomImagen,fuegoImagen, 600, 600);
  setInterval(jugar, 200);
  setInterval(crearObstaculos, 3000);
};

const moverMinion = (e) => {
  miniom.borrar();
  if (e.key === "ArrowLeft") {
    miniom.x -= 5;
  }
  if (e.key === "ArrowRight") {
    miniom.x += 5;
  }
  if (e.key === "ArrowUp") {
    miniom.y -= 5;
  }
  if (e.key === "ArrowDown") {
    miniom.y += 5;
  }
  miniom.dibujar();
};

window.addEventListener("load", cargaInicial);

//window.addEventListener("keydown", moverMinion);

//Rotar imagen
//Que vaya a unas coordenadas
//Mover(1,-1)
