function setup() {
  createCanvas(1000, 500, WEBGL);
  sun = loadImage("https://i.ibb.co/3MTvmLF/sunmap.jpg") ;
  mercury = loadImage("https://i.ibb.co/x2Fhhk6/mercurymap.jpg") ;
  venus = loadImage("https://i.ibb.co/yq4BJPB/venusmap.jpg") ;
  earth = loadImage("https://i.ibb.co/WgzR34B/8081-earthmap10k.jpg") ;
  mars = loadImage("https://i.ibb.co/C1TKMW8/marsmap1k.jpg") ;
  jupiter = loadImage("https://i.ibb.co/18GvJWK/jupitermap.jpg") ;
  saturn = loadImage("https://i.ibb.co/qRrck6B/saturnmap.jpg") ;
  uranus = loadImage("https://i.ibb.co/YLK841f/uranusmap.jpg") ;
  neptune = loadImage("https://i.ibb.co/6YXCsqp/neptunemap.jpg") ;
}

function draw() {
  background(0);
  translate(0, 0, 0);
  orbitControl();

  // SUN
  push();
  translate(-1050,0,0);
  rotateY(frameCount * 0.0005);
  texture(sun); 
  sphere(520);
  pop();
  strokeWeight(0);

  directionalLight(204, 204, 204, 0, -300,);


    // mercury
    push();
    translate(-277,0,0);
    rotateY(frameCount * 0.03);
    texture(mercury); 
    sphere(3);
    pop();
    strokeWeight(0);
  
    // venus
    push();
    translate(-233,0,0);
    rotateY(frameCount * 0.01);
    texture(venus); 
    sphere(7.5);
    pop();
    strokeWeight(0);
       
  // earth
  push();
  translate(-171,0,0);
  rotateY(frameCount * 0.01);
  texture(earth); 
  sphere(7.5);
  pop();
  strokeWeight(0);

    // mars
    push();
    translate(-116,0,0);
    rotateY(frameCount * 0.05);
    texture(mars); 
    sphere(3);
    pop();
    strokeWeight(0);

  // jupiter
  push();
  translate(-11,0,0);
  rotateY(frameCount * 0.0018);
  texture(jupiter); 
  sphere(63.5);
  pop();
  strokeWeight(0);

    // saturn
    push();
    translate(175,0,0);
    rotateY(frameCount * 0.003);
    texture(saturn); 
    sphere(52.5);
    pop();
    strokeWeight(0);

      // uranus
  push();
  translate(293,0,0);
  rotateY(frameCount * 0.01);
  texture(uranus); 
  sphere(23.5);
  pop();
  strokeWeight(0);

    // neptune
    push();
    translate(375,0,0);
    rotateY(frameCount * 0.01);
    texture(neptune); 
    sphere(23);
    pop();
    strokeWeight(0);
}