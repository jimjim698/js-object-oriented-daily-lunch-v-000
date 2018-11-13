// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0
let mealId = 0
let customerId = 0

class Neighborhood{
  constructor(name){
    this.name = name 
    this.id = ++neighborhoodId
    store.neighborhoods.push(this)
  }

}

class Customer{
  constructor(name, neighborhood){
    this.name = name 
    this.neighborhoodId = neighborhood.id
    this.id = ++customerId 
    store.customers.id
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
  constructor(customer, meal, neighborhood){
    customerId = customer.id
    mealId = meal.id 
    neighborhoodId = neighborhood.id
    
    store.deliveries.push(this)
  }
  
  
}


















































