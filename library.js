class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [1,2,3,4,5,6,7,8,9,10,11];
  }

get title(){
  return this._title
}

get isCheckedOut(){
  return this._isCheckedOut
}

set isCheckedOut(yesOrNo){
  this._isCheckedOut = yesOrNo
}

toggleCheckOutStatus(){
  if (this._isCheckedOut === false){
    this._isCheckedOut = true;
  } else if (this._isCheckedOut === true){
    this._isCheckedOut = false
  }
}

getAverageRating(){
  let ratingsSum = this.ratings.reduce((currentSum, rating) =>      currentSum + rating, 0);
  return ratingsSum / this._ratings.length
}

addRating(newRating){
  this._ratings.push(newRating)
}

get ratings(){
  return this._ratings
}
}

class Book extends Media{
  constructor(title, author, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  
  }

  get author(){
    return this._author
  }

  get pages(){
    return this._pages
  }
}

class Movie extends Media{
  constructor(title, director, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  
  }

  get director(){
    return this._director
  }

  get runTime(){
    return this._runTime
  }
}

let book = new Book('jerks', 'sean barry',555);
book.addRating(3)
console.log(book)
console.log('book average rating is ' + book.getAverageRating())

let historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson', 544)

console.log(historyOfEverything)
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything)
console.log(historyOfEverything.getAverageRating())

