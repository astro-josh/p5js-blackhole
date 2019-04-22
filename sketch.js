const C = 30;
const G = 2;
const dt = 0.1;

let m87;

let particles = [];
let start, end;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  m87 = new Blackhole(width / 2, height / 2, 3000);

  start = height / 2;
  end = height / 2 - m87.rs * 2.6;

  for (let y = 0; y < start; y += 20) {
    particles.push(new Photon(width - 20, y));
  }
}

function draw() {
  background(255);

  for (let p of particles) {
    m87.pull(p);
    p.update();
    p.show();
  }

  m87.show()
}