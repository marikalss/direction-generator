  let state = 0;
  let number = 0;
  let firstDirections = ['go left', 'go right'];
  let directions = ['take the next right', 'take the next left', 'keep straight'];
  let textHeight = 100;
  let textHeightc2 = 100;
  let textHeightc3 = 100;
  let dirNumber = 0;
  let buttonGen, buttonRand, inputDir, buttonRestart, randomGen, randomGenlist;


function setup() {
  createCanvas(windowWidth, windowHeight);
  userInput()
    background(255);
  
}

function restartSketch(){
 background(255)
  state = 0;
  number = 0;
  firstDirections = ['go left', 'go right'];
  directions = ['take the next right', 'take the next left', 'keep straight'];
  textHeight = 100;
  textHeightc2 = 100;
  textHeightc3 = 100;
  dirNumber = 0;
  buttonRestart.hide();
  randomGen.hide();
  randomGenlist.hide();
  setup();
}

function draw() {
  
}

function userInput(){

  
  if (state==0){
  col = color(255);
  
  print('InputGoing!!')
  inputDir = createInput();
  inputDir.style('border-width:2px');
  inputDir.style('border-color: black');
  inputDir.position(50, 100);
  inputDir.size(300, 25);
  // inputDir.focus('outline:none')
  
  buttonGen = createButton('generate');
  buttonGen.style('background-color', col)
  buttonGen.style('border-width:2px');
  buttonGen.style('border-color: black');
   buttonGen.style('font-family', 'avenir');
  buttonGen.style('font-weight', 'bold');
  buttonGen.size(100, inputDir.height);
  buttonGen.position(inputDir.x + inputDir.width - buttonGen.width, inputDir.y +             buttonGen.height + 20);
  
  buttonRand = createButton('random');
  buttonRand.style('background-color', col)
  buttonRand.style('border-width:2px');
  buttonRand.style('font-family', 'avenir');
  buttonRand.style('font-weight', 'bold');
  buttonRand.style('border-color: black');
  buttonRand.size(100, inputDir.height);
  buttonRand.position(inputDir.x , inputDir.y + buttonRand.height + 20);
  
  // textSize(25);
  // greeting = text('how many directions?', inputDir.x, inputDir.y-25)
  
  
  greeting = createElement('h1', 'how many directions?');
  greeting.position(inputDir.x, inputDir.y - 60);
  
  buttonGen.mousePressed(inputVal);
  buttonRand.mousePressed(randomInput);
    state=1;
  }
}

function inputVal(){
  
  dirNumber = inputDir.value();
  randomGen = createElement('h1', dirNumber + ' directions generated');
  randomGen.position(greeting.x, greeting.y)
  generate();
  
}

function randomInput(){
  
  dirNumber = int(random(5,50));
  
  randomGen = createElement('h1', dirNumber + ' directions generated');
  randomGen.position(greeting.x, greeting.y)
  
//   textSize(24)
//   text(dirNumber + ' directions generated', greeting.x, greeting.y)
  
  generate();
  
}

function generate(){
  

  
  buttonGen.hide();
  buttonRand.hide();
  greeting.hide();
  inputDir.hide();
  

  if (number < 1){  
    number = number + 1;
  let firstDirection = random(firstDirections);
      textSize(12)
    
  randomGenlist = createElement('p', firstDirection);
  randomGenlist.position(100, textHeight)
  // text(firstDirection, greeting.x, textHeight)
  textHeight = textHeight + 20;
  }
  
  // if (number <=dirNumber){
  for(let i = 0; i<= dirNumber; i++){
    if(number<=25){
    // if (number <= 19){
   number = number + 1;
   let direction = random(directions);
    randomGenlist = createElement('p', direction);
  randomGenlist.position(100, textHeight)
  // text(direction, 10, textHeight)
  textHeight = textHeight + 20;
  //} 
    state = 3;
    } else if (number>=26 && number<=49){
    
    // if (number <= 19){
   number = number + 1;
   let direction = random(directions);
    randomGenlist = createElement('p', direction);
  randomGenlist.position(300,textHeightc2)
  // text(direction, 10, textHeight)
  textHeightc2 = textHeightc2 + 20
  //} 
    state = 3;
  } else if (number>=50 ){
    
    // if (number <= 19){
   number = number + 1;
   let direction = random(directions);
    randomGenlist = createElement('p', direction);
  randomGenlist.position(500,textHeightc3)
  // text(direction, 10, textHeight)
  textHeightc3 = textHeightc3 + 20
  //} 
    state = 3;
  }

    
}
  buttonRestart = createButton('restart');
  buttonRestart.style('background-color', col)
  buttonRestart.style('border-width:2px');
  buttonRestart.style('font-family', 'avenir');
  buttonRestart.style('font-weight', 'bold');
  buttonRestart.style('border-color: black');
  buttonRestart.size(100, inputDir.height);
  buttonRestart.position(inputDir.x , textHeight + 50);
  buttonRestart.mousePressed(restartSketch);


}