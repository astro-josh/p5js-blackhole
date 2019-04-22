class Photon {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(-C, 0);
    this.path = [];
    this.stopped = false;
  }

  update() {
    if (!this.stopped) {
      this.path.push(this.pos.copy());
      const deltav = this.vel.copy();
      deltav.mult(dt);
      this.pos.add(deltav);
    }

    if (this.path.length > 500) {
      this.path.splice(0, 1);
    }
  }

  show() {
    strokeWeight(4);
    stroke(0, 0, 255);
    point(this.pos.x, this.pos.y);

    strokeWeight(1);
    beginShape();
    for (let v of this.path) {
      vertex(v.x, v.y);
    }
    endShape();
  }

  stop() {
    this.stopped = true;
  }
}