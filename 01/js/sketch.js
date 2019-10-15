function setup() {
  createCanvas(950, 500, WEBGL);
  img = loadImage("https://i.ibb.co/WgzR34B/8081-earthmap10k.jpg") ;
}

function draw() {
  background(250);
  translate(0, 0, 0);
  push();
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  texture(img); 
  sphere(150);
  pop();
  strokeWeight(0);
}