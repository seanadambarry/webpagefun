const menu = {
    _courses : {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers(){
        return this._courses.appetizers;
    },
    set appetizers(newAppetizers){
        this._courses.appetizers = newAppetizers;
    },
    get mains(){
        return this._courses.mains;
    },
    set mains(newMains){
        this._courses.mains = newMains;
    },
    get desserts(){
        return this._courses.desserts
    },
    set desserts(newDesserts){
            this._courses.desserts = newDesserts
    },
    get courses(){
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },
    addDishToCourse(courseName, dishName, dishPrice){
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      let dishes = menu.courses[courseName];
      
      return dishes = dishes[Math.floor(Math.random() * dishes.length)]
      
    },
  };
  
  function generateRandomMeal(){
    let appetizer = menu.getRandomDishFromCourse('appetizers');
    let main = menu.getRandomDishFromCourse('mains');
    let dessert = menu.getRandomDishFromCourse('desserts');
    console.log(appetizer,main,dessert)
    let totalPrice = appetizer.price + main.price + dessert.price;
    console.log(`Your random meal is ${appetizer.name}, ${main.name}, and ${dessert.name} and the total price is ${totalPrice}!`)
  }

  menu.addDishToCourse('mains','pasta alfredo',13.50)
  menu.addDishToCourse('appetizers','onion soup',5.50)
  menu.addDishToCourse('desserts','tiramisu',9.00)
  menu.addDishToCourse('mains','steak and potatoes',17.50)
  menu.addDishToCourse('appetizers','mozza sticks',6.70)
  menu.addDishToCourse('desserts','ice cream',8.00)

  generateRandomMeal()
