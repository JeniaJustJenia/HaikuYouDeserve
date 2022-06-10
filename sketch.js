var randomWord;
function setup() {
  createCanvas(400, 400);
  var randomWord = new RiTa.randomWord();
  textSize(20);
  textAlign(CENTER, CENTER);

  textAlign(LEFT, TOP);
  generateHaiku();
}

function mousePressed(){
  generateHaiku();
}

function generateHaiku(){
  var output =
    //first line, 5 syllables
    RiTa.randomWord(["vb",1])+""+
    RiTa.randomWord (["jj", 2]) + " " +
    RiTa.randomWord (["nn", 2]) + "\n" +

    //second line, 7 syllables
    RiTa.randomWord(["vbg", 2]) + " " +
    RiTa.randomWord(["nn", 2]) + " " +
    RiTa.randomWord(["rb", 3]) + "\n" +
    
    //third line, 5 syllables
    RiTa.randomWord(["nns", 1]) + " " +
    RiTa.randomWord(["vbg", 2]) + " " +
    RiTa.randomWord(["nn", 2]);
  background(255);
  text(output, 10, 10, width-20, height-20);
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas('haiku', 'png');
}