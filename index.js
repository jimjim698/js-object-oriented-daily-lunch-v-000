// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0
let mealId = 0
let customerId = 0
let deliveryId = 0

class Neighborhood{
  constructor(name){
    this.name = name 
    this.id = ++neighborhoodId
    store.neighborhoods.push(this)
  }
  
  deliveries(){
    return store.deliveries.filter(
      function(d){
        return d.neighborhoodId === this.id
      }.bind(this))
  }
  
  customers(){
    return store.customers.filter(
      function(d){
        return d.neighborhoodId === this.id
      }.bind(this))
  }

}

class Customer{
  constructor(name, neighborhoodId){
    this.name = name 
    this.neighborhoodId = neighborhoodId
    this.id = ++customerId 
    store.customers.push(this)
  }
  
}

class Meal{
  constructor(title, price){
  this.title = title
  this.price = price
  this.id = ++mealId
  store.meals.push(this)
  }
}

class Delivery{
  constructor(meal, neighborhood, customer){
    this.customerId = customer
    this.mealId = meal
    this.neighborhoodId = neighborhood
    this.id = ++deliveryId
    store.deliveries.push(this)
  }
  
  meal(){
    store.meals.find(
      function(m){
        m.id === this.mealId
      }.bind(this))
  }
  
}


















































