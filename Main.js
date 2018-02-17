function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(240);
  for(var i = 6; i > -1; i--) {
    fill(50, 120, 245);
    stroke(0);
    strokeWeight(2);
    var width = 100-i*2;
    rect((mouseX-width/2)-(mouseX-300)/((40-i)/20), mouseY-width/2-(mouseY-300)/((40-i)/20), width, width)
  }
}
