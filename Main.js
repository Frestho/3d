function setup() {
  createCanvas(400, 040);
}
function draw(){
translate(400,200)
rect(-200, -200, canvas.width-2, canvas.height-2);
drawShape();  
}

     var angle = TWO_PI/lines;
      var radius = length/(2*sin(PI/lines));
      for(let i = 0; i < lines; i++) {
        beginShape();
        for (var a = 0; a < 2*angle; a += angle) {
          var sx = cos(a) * radius;
          var sy = sin(a) * radius;
          vertex(sx, sy);
        }
        endShape();
        rotate(TWO_PI/lines);
      }
