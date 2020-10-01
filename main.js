const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//plansza do gry rysowanie
const width = (canvas.width = 1000);
const height = (canvas.height = 500);

const table = () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
};

//rozmiar piłki
const ballSize = 20;

// połozenie piłki
let ballX = width / 2 - ballSize / 2;
let ballY = height / 2 - ballSize / 2;

//ruch piłki szybkość
let ballSpeedX = 4;
let ballSpeedY = 4;

const ball = () => {
  //piłka rysowanie
  ctx.fillStyle = "white";
  ctx.fillRect(ballX, ballY, ballSize, ballSize);

  // Odbijanie piłki od krawędzi planszy - Canvas
  if (ballY <= 0 || ballY + ballSize >= height) {
    ballSpeedY = -ballSpeedY;
  }
  if (ballX <= 0 || ballX + ballSize >= width) {
    ballSpeedX = -ballSpeedX;
  }

  if (
    posXPlayer1 + widthPlayer1 >= ballX &&
    posYPlayer1 < ballY &&
    posYPlayer1 + heightPlayer1 > ballY
  ) {
    ballSpeedX = -ballSpeedX;
  }

  //ruch piłki
  ballX += ballSpeedX;
  ballY += ballSpeedY;
};

//połozenie paletki
let posXPlayer1 = 40;
let posYPlayer1 = 200;

//wymiary paletki
let widthPlayer1 = 15;
let heightPlayer1 = 100;

let player1MoveSpeedY = 5;

let player1MoveUp = false;
let player1MoveDown = false;

//Paletka lewa rysowanie
const player1 = () => {
  ctx.fillStyle = "white";
  ctx.fillRect(posXPlayer1, posYPlayer1, widthPlayer1, heightPlayer1);

  if (player1MoveUp) movePaleteUp();

  if (player1MoveDown) movePaleteDown();
};

const movePaleteUp = () => {
  if (posYPlayer1 <= 0) return false;
  posYPlayer1 -= player1MoveSpeedY;
};

const movePaleteDown = () => {
  if (posYPlayer1 + heightPlayer1 >= height) return false;
  posYPlayer1 += player1MoveSpeedY;
};

//połozenie paletki prawej
let posXPlayer2 = 940;
let posYPlayer2 = 200;

//wymiary paletki prawej
const widthPlayer2 = 15;
const heightPlayer2 = 100;

let player2MoveUp = false;
let player2MoveDown = false;
let player2MoveSpeedY = 5;
//Paletka prawa rysowanie
const player2 = () => {
  ctx.fillStyle = "white";
  ctx.fillRect(posXPlayer2, posYPlayer2, widthPlayer2, heightPlayer2);

  if (player2MoveUp) movePalete2Up();

  if (player2MoveDown) movePalete2Down();
};

const movePalete2Up = () => {
  if (posYPlayer2 <= 0) return false;
  posYPlayer2 -= player2MoveSpeedY;
};

const movePalete2Down = () => {
  if (posYPlayer2 + heightPlayer2 >= height) return false;
  posYPlayer2 += player2MoveSpeedY;
};

// środkowe linie rysowanie

const posYLine = 0;
const widthLine = 0.8;
const heightLine = 500;
const lineMiddle = () => {
  ctx.fillStyle = "white";
  ctx.fillRect(width / 2, posYLine, widthLine, height);
};

function init() {
  window.addEventListener("keyup", function (e) {
    if (e.key === "w") {
      player1MoveUp = false;
    }

    if (e.key === "s") {
      player1MoveDown = false;
    }
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "w") {
      player1MoveUp = true;
    }

    if (e.key === "s") {
      player1MoveDown = true;
    }
  });
}
init();

function initTwo() {
  window.addEventListener("keyup", function (e) {
    if (e.key === "ArrowUp") {
      player2MoveUp = false;
    }

    if (e.key === "ArrowDown") {
      player2MoveDown = false;
    }
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
      player2MoveUp = true;
    }

    if (e.key === "ArrowDown") {
      player2MoveDown = true;
    }
  });
}
initTwo();

// wywoływanie wszytkich funkcji
const render = () => {
  table();
  ball();
  player1();
  lineMiddle();
  player2();
  window.requestAnimationFrame(render); //wprawienie w ruch/animacja
};

//renderowanie całośći - wyświetlenie
window.requestAnimationFrame(render);
