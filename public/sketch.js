let location1;  // Location of shape
let velocity1;  // Velocity of shape
let gravity1;   // Gravity acts at the shape's acceleration

let location2;
let velocity2;
let gravity2;

function setup() {
  createCanvas(640,360);
  location1 = new createVector(100,100);
  velocity1 = new createVector(1.5,2.1);
  gravity1 = new createVector(0,0.2);
    
  location2 = new createVector(600,150);
  velocity2 = new createVector(1.0,1.5);
  gravity2 = new createVector(0,0.3);
}

function draw() {
  background(0);
  
  // Add velocity to the location.
  location1.add(velocity1);
  // Add gravity to velocity
  velocity1.add(gravity1);
  
  location2.add(velocity2);
  velocity2.add(gravity2);
  
  // Bounce off edges
  if ((location1.x > width) || (location1.x < 0)) {
    velocity1.x = velocity1.x * -1;
  }
  
  if ((location2.x > width) || (location2.x < 0)) {
    velocity2.x = velocity2.x * -1;
  }
  
  if (location1.y > height) {
    // We're reducing velocity ever so slightly 
    // when it hits the bottom of the window
    velocity1.y = velocity1.y * -0.95; 
    location1.y = height;
  }
  if (location2.y > height) {
    velocity2.y = velocity2.y * -0.95; 
    location2.y = height;
  }

  // Display circle at location vector
  stroke(255);
  strokeWeight(2);
  fill(127);
  ellipse(location1.x,location1.y,48,48);
  ellipse(location2.x,location2.y,100,100);
}