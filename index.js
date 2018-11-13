// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0
let mealId = 0

class Neighborhood{
  constructor(name){
    this.name = name 
    this.id = ++neighborhoodId
    store.neighborhoods.push(this)
  }

}

class Meal{
  constructor(title, price){
  this.title = title
  this.price = price
  this.id = ++mealID
  store.meals.push(this)
  }
}

class Delivery{
  constructor(){
    store.deliveries.push(this)
  }
  
  
}


















































