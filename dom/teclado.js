const d = document;
let x = 0;
let y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball);
  const $stage = d.querySelector(stage);
  const limitBall = $ball.getBoundingClientRect();  // getBoundingClientRect() metodo para detectar coliciones visuales
  const limitStage = $stage.getBoundingClientRect();

  switch (e.keyCode) {
    case 37:
      e.preventDefault();
      if (limitBall.left > limitStage.left) x--; // left
      break;
    case 38:
      e.preventDefault();
      if (limitBall.top > limitStage.top) y--; // up
      break;
    case 39:
      e.preventDefault();
      if (limitBall.right < limitStage.right) x++; // right
      break;
    case 40:
      e.preventDefault();
      if (limitBall.bottom < limitStage.bottom) y++; // down
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(e) {
  console.log(e);
  console.log(e.keyCode);

  if (e.key === "d" && e.ctrlKey) {
    alert("oprimiste control d");
  }
}
