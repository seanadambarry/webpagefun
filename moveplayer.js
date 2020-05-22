let canvas = document.getElementById("canvas")
let context = canvas.getContext("2d");
let player = {
    _x: 0,
    set x(newX){
      this._x = newX;
      this.myLeft = this.x + 15;
      this.myRight = this.x + 35;
    },
    get x(){
      return this._x
    },
    _y : 0,
    set y(newY){
      this._y = newY;
      this.myTop = this.y + 20;
      this.myBottom = this.y + 68;
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
    _money : 0,
    set money(newmoney){
      this._money = newmoney;
      document.getElementById("money").innerHTML = `You have ${this._money} money !`;
      console.log('add money method');
    },
    get money(){
      return this._money;
    },
    addmoney(addmoney){
      this.money = this.money + addmoney;
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

  let money = []

let img = document.getElementById("char");


for (let i = 0; i < 10; i++){
  money[i] = {
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
enemy.x = Math.floor(Math.random() * (canvas.width - enemy.width));
enemy.y = Math.floor(Math.random() * (canvas.height - enemy.height));
for (let i = 0; i < 10; i++){
  money[i].x = Math.floor(Math.random() * (canvas.width - 20))
  money[i].y = Math.floor(Math.random() * (canvas.height - 20))
}


console.log(money)


function updateGameArea() {
    context.fillStyle = "slategrey"
    context.fillRect(0, 0, canvas.width, canvas.height)

    //put money on screen
    for (let i = 0; i < money.length; i++){
      context.fillStyle = "yellow"
      context.fillRect(money[i].x, money[i].y, money[i].width, money[i].height)

      if (player.myLeft < money[i].itsRight && player.myRight > money[i].itsLeft && player.myTop < money[i].itsBottom && player.myBottom > money[i].itsTop){
        player.addmoney(money[i].value);
        money.splice(i,1)
        console.log(money)
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