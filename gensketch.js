let number = 0;
let firstDirections = ["go left", "go right"];
let directions = ["take the next right", "take the next left", "keep straight"];
let textHeight = 125;
let textHeightc2 = 125;
let textHeightc3 = 125;
let textHeightc4 = 125;
let dirNumber = 0;
let buttonGen, buttonRand, inputDir, buttonRestart, randomGen, randomList1;
let randomList = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  userInput();
}

function restartSketch() {
  color("white");
  square(0, 0, windowWidth, windowHeight);
  background(255);

  number = 0;
  textHeight = 125;
  textHeightc2 = 125;
  textHeightc3 = 125;
  textHeightc4 = 125;
  dirNumber = 0;
  buttonRestart.hide();
  randomGen.hide();
  print("restart");
  setup();
}

function draw() {}

function userInput() {
  background(255);

  col = color(255);

  print("InputGoing!!");
  inputDir = createInput();
  inputDir.style("border-width:2px");
  inputDir.style("border-color: black");
  inputDir.position(50, 100);
  inputDir.size(300, 25);
  inputDir.input(isNumber);

  buttonGen = createButton("generate");
  buttonGen.style("background-color", col);
  buttonGen.style("border-width:2px");
  buttonGen.style("border-color: black");
  buttonGen.style("font-family", "proxima-nova");
  buttonGen.style("font-weight", "bold");
  buttonGen.size(100, inputDir.height);
  buttonGen.position(
    inputDir.x + inputDir.width - buttonGen.width,
    inputDir.y + buttonGen.height + 25);

  buttonRand = createButton("random");
  buttonRand.style("background-color", col);
  buttonRand.style("border-width:2px");
  buttonRand.style("font-family", "proxima-nova");
  buttonRand.style("font-weight", "bold");
  buttonRand.style("border-color: black");
  buttonRand.size(100, inputDir.height);
  buttonRand.position(inputDir.x, inputDir.y + buttonRand.height + 25);

  greeting = createElement("h1", "how many directions?");
  greeting.position(inputDir.x, inputDir.y - 60);

  max = createElement("p", "max 100");
  max.position(inputDir.x+inputDir.width-45, inputDir.y+20);
  
  min = createElement("p", "min 1");
  min.position(inputDir.x, inputDir.y+20);

  
 buttonGen.mousePressed(inputVal);

  
 buttonRand.mousePressed(randomInput);
}

function isNumber() {
  let s = this.value();
  let c = s.charCodeAt(s.length - 1);

  if (!(c > 47 && c < 58)) {
    this.value(s.substring(0, s.length - 1));
    textFont("Proxima Nova");
  }
}

function inputVal() {
  dirNumber = inputDir.value();
  if(dirNumber>=1 && dirNumber<=100){
  randomGen = createElement("h1", dirNumber + " directions generated");
  randomGen.position(greeting.x, greeting.y);
  generate();
  }
  else{
  buttonGen.hide();
  buttonRand.hide();
  greeting.hide();
  inputDir.hide();
  max.hide();
  min.hide();
  userInput();
  }
}

function randomInput() {
  dirNumber = int(random(1, 100));

  randomGen = createElement("h1", dirNumber + " directions generated");
  randomGen.position(greeting.x, greeting.y);

  generate();
}

function generate() {
  print("generator going!");
  textFont("Proxima Nova");

  buttonGen.hide();
  buttonRand.hide();
  greeting.hide();
  inputDir.hide();
  max.hide();
  min.hide();

  if (number < 1) {
    number = number + 1;
    let firstDirection = random(firstDirections);

    textSize(12);

    text(firstDirection, 50, textHeight);
    textHeight = textHeight + 20;
  }

  for (let i = 0; i < dirNumber - 1; i++) {
    let direction = random(directions);

    if (number <= 24) {
      number = number + 1;
      text(direction, greeting.x, textHeight);
      textHeight = textHeight + 20;
    } else if (number >= 25 && number <= 49) {
      number = number + 1;
      text(direction, greeting.x+200, textHeightc2);
      textHeightc2 = textHeightc2 + 20;
    } else if (number >= 50 && number<=74) {
      number = number + 1;
      text(direction, greeting.x+400, textHeightc3);
      textHeightc3 = textHeightc3 + 20;
    }else if (number >= 75) {
      number = number + 1;
      text(direction, greeting.x+600, textHeightc4);
      textHeightc4 = textHeightc4 + 20;
    }
  }
  buttonRestart = createButton("restart");
  buttonRestart.style("background-color", col);
  buttonRestart.style("border-width:2px");
  buttonRestart.style("font-family", "proxima-nova");
  buttonRestart.style("font-weight", "bold");
  buttonRestart.style("border-color: black");
  buttonRestart.size(100, inputDir.height);
  buttonRestart.position(inputDir.x, textHeight + 20);
  buttonRestart.mousePressed(restartSketch);
}

class genListclass {
  constructor(direction, x, y) {
    this.direction = direction;
    this.x = x;
    this.y = y;
  }
}
