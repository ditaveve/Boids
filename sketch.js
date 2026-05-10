const boids = [];
const nBoids = 400;

function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);

  for(let i = 0; i < nBoids; i++){
    let newBoid = new Boid();
    newBoid.position = createVector(5 + i*2, 20);
    boids.push(newBoid);
  }
}

function draw() {
  background(220);

  let mouseVector = createVector(mouseX, mouseY);

  for(let i = 0; i < nBoids; i++){
    boids[i].steer(mouseVector, boids, nBoids);
    boids[i].updatePhysics(deltaTime*0.001);
    boids[i].drawBoid();
  }
}
