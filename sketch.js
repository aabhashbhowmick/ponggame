var playerPaddle,computerpaddle,ball;


function setup(){
  createCanvas(400,400);
  //player Paddle
  playerPaddle = new Paddle();
  computerpaddle= new Paddle();
ball=new Ball();
}


function draw() {
  //set background to white
  background("white");
  
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  
  playerPaddle.display();
  
  //computer paddle
  
  computerpaddle.xPosition=10;
  computerpaddle.yPosition=150;
  computerpaddle.display();
  //ball
  ball.xposition=200;
  ball.yposition=200;
  ball.width=10;
  ball.height=10;
  ball.show();
}