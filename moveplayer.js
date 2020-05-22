var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d");
let player = {
    _x: 0,
    set x(newX){
      this._x = newX;
      this.myLeft = this.x;
      this.myRight = this.x + 50;
    },
    get x(){
      return this._x
    },
    _y : 0,
    set y(newY){
      this._y = newY;
      this.myTop = this.y;
      this.myBottom = this.y + 88;
    },
    get y(){
      return this._y;
    },
    myLeft : 0,
    myRight : 0,
    myTop : 0,
    myBottom : 0,
    speedX: 0.0,
    speedY: 0.0,
    _gold : 0,
    set gold(newGold){
      this._gold = newGold;
      document.getElementById("gold").innerHTML = `You have ${this._gold} GOLD !`;
      console.log('add gold method');
    },
    get gold(){
      return this._gold;
    },
    addGold(addGold){
      this.gold = this.gold + addGold;
    }
  };
let enemy = {
    _x : 0,
    set x(newX){
      this._x = newX;
      this.itsLeft = this.x;
      this.itsRight = this.x + this.width;
    },
    get x(){
      return this._x;
    },
    _y : 0,
    set y(newY){
      this._y = newY;
      this.itsTop = this.y;
      this.itsBottom = this.y + this.height;
    },
    get y(){
      return this._y;
    },
    height : 30,
    width : 30,
    itsLeft : 0,
    itsRight : 0,
    itsTop :0,
    itsBottom : 0
    
  };

  let gold = []

var img = document.getElementById("char");


for (let i = 0; i < 10; i++){
  gold[i] = {
    _x : 0,
    set x(newX){
      this._x = newX;
      this.itsLeft = this.x;
      this.itsRight = this.x + this.width;
    },
    get x(){
      return this._x;
    },
    _y : 0,
    set y(newY){
      this._y = newY;
      this.itsTop = this.y;
      this.itsBottom = this.y + this.height;
    },
    get y(){
      return this._y;
    },
    value : 100,
    height : 20,
    width : 20,
    itsLeft : 0,
    itsRight : 0,
    itsTop :0,
    itsBottom : 0
  }
}


//startup stuff
player.x = 200;
player.y = 100;
enemy.x = Math.floor(Math.random() * 400) + 30;
enemy.y = Math.floor(Math.random() * 400) + 30;
for (let i = 0; i < 10; i++){
  gold[i].x = Math.floor(Math.random() * 470)
  gold[i].y = Math.floor(Math.random() * 470)
}


console.log(gold)


function updateGameArea() {
    context.fillStyle = "slategrey"
    context.fillRect(0, 0, canvas.width, canvas.height)

    //put gold on screen
    for (let i = 0; i < gold.length; i++){
      context.fillStyle = "yellow"
      context.fillRect(gold[i].x, gold[i].y, gold[i].width, gold[i].height)

      if (player.myLeft < gold[i].itsRight && player.myRight > gold[i].itsLeft && player.myTop < gold[i].itsBottom && player.myBottom > gold[i].itsTop){
        alert('You found gold!');
        player.addGold(gold[i].value);
        gold.splice(i,1)
        console.log(gold)
      }

    }



    context.fillStyle = "red"
    context.fillRect(enemy.x, enemy.y, enemy.width, enemy.height)
    
    context.drawImage(img, player.x, player.y, 50, 88)

    if (player.myLeft < enemy.itsRight && player.myRight > enemy.itsLeft && player.myTop < enemy.itsBottom && player.myBottom > enemy.itsTop){
        alert('enemy!')
        player.x = enemy.x + 50
    }
    

    //console.log('PLAYER X and Y : ' + player.x + ' ' + player.y + 'PLAYER :  ' + player.myLeft + ' ' + player.myRight + ' ' + player.myTop + ' ' + player.myBottom)
    //console.log('ENEMY : ' + enemy.itsLeft + ' ' +  enemy.itsRight + ' ' +  enemy.itsTop + ' ' +  enemy.itsBottom)

    requestAnimationFrame(updateGameArea);  
}

window.onkeydown = function(event) {
  event.preventDefault() // stops the button scrolling the page
  if(event.keyCode == 40) { // down
    player.y += 10
  } else if(event.keyCode == 38) { // up
    player.y -= 10   
  } else if(event.keyCode == 39) { // right 
    player.x += 10  
  } else if(event.keyCode == 37) { // left
    player.x -= 10        
  } 
}

requestAnimationFrame(updateGameArea);