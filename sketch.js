const boids = [];
const nBoids = 200;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  for (let i = 0; i < nBoids; i++) {
    let b = new Boid();

    // start randomly across screen (IMPORTANT fix)
    b.position = createVector(
      random(width),
      random(height)
    );

    // give initial velocity so they don’t look “dead”
    b.velocity = createVector(random(-1, 1), random(-1, 1));

    boids.push(b);
  }
}

function draw() {
  background(240);

  // DEBUG: confirms canvas is running
  fill(0);
  text("Boids running: " + boids.length, 10, 20);

  let mouseVector = createVector(mouseX, mouseY);

  for (let i = 0; i < boids.length; i++) {
    boids[i].steer(mouseVector, boids, boids.length);
    boids[i].updatePhysics(deltaTime * 0.001);
    boids[i].drawBoid();
  }
}
