class Boid {
  static size = 20;
  static desiredVelSpeed = 100;
  static forceMag = 50;

  constructor(){
    this.position = createVector(0,0);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
  }

  drawBoid(){
    let heading = this.velocity;

    if(heading.x == 0 && heading.y == 0){
      heading = createVector(0, 1);
    }

    let dp2 = heading.copy();
    dp2.rotate(170);
    dp2.setMag(Boid.size);

    let dp3 = heading.copy();
    dp3.rotate(190);
    dp3.setMag(Boid.size);

    let p2 = this.position.copy().add(dp2);
    let p3 = this.position.copy().add(dp3);

    triangle(this.position.x, this.position.y, p2.x, p2.y, p3.x, p3.y);
  }

  updatePhysics(dt){
    this.position.add(0.5 * this.velocity.x * dt, 0.5 * this.velocity.y * dt);
    this.velocity.add(this.acceleration.x * dt, this.acceleration.y * dt);
    this.position.add(0.5 * this.velocity.x * dt, 0.5 * this.velocity.y * dt);
  }

  seek(target){
    let desiredVel = target.copy().sub(this.position);
    desiredVel.setMag(Boid.desiredVelSpeed);

    let steeringForce = desiredVel.sub(this.velocity);
    steeringForce.setMag(Boid.forceMag);

    this.acceleration = steeringForce;
    return steeringForce;
  }

  separate(boids, nBoids){
    let desiredSeparationDist = 20;
    let steeringForce = createVector(0, 0);
    let sum = createVector();
    let nCloseBoids = 0;

    for(let i =0; i < nBoids; i++){
      let otherBoid = boids[i];

      if (this == otherBoid) continue;

      let distance = p5.Vector.dist(this.position, otherBoid.position);

      if (distance < desiredSeparationDist){
        let awayVector = this.position.copy().sub(otherBoid.position);
        awayVector.setMag(1);

        sum.add(awayVector);
        nCloseBoids++;
      }
    }

    if (nCloseBoids > 0){
      sum.setMag(Boid.desiredVelSpeed);
      steeringForce = sum.sub(this.velocity);
      steeringForce.setMag(Boid.forceMag);
      this.acceleration = steeringForce;
    }

    return steeringForce;
  }

  steer(target, boids, nBoids){
    let sepForce = this.separate(boids, nBoids);
    let seekForce = this.seek(target);

    this.acceleration = sepForce.add(seekForce);
  }
}
