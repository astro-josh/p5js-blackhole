class Blackhole {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.mass = m;
    this.rs = 2 * G * this.mass / (C * C);
  }

  show() {
    fill(0);
    noStroke();
    circle(this.pos.x, this.pos.y, this.rs);

    noFill();
    stroke(100, 100);
    strokeWeight(64);
    circle(this.pos.x, this.pos.y, this.rs * 3 + 32);

    stroke(255, 0, 0);
    strokeWeight(32);
    circle(this.pos.x, this.pos.y, this.rs * 1.5 + 16);
  }

  pull(photon) {
    const force = p5.Vector.sub(this.pos, photon.pos);
    const r = force.mag();
    const fg = G * this.mass / (r * r);
    force.setMag(fg);
    photon.vel.add(force);
    photon.vel.limit(C);

    if (r < this.er) {
      photon.stop();
    }
  }
}