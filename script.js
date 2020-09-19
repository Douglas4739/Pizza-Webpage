let pizza = ["Pepperoni & Jalapeno", "Meatlovers", "Steak & Bacon"];
//console.log(pizza.length)
//console.log(pizza[1])

function getPizza(per1){
  for(let i = 0; i < per1.length; i++)
  console.log(pizza[i])
}
//getPizza(pizza);

function randomPizza(per1){
  Math.floor(Math.random() * 3);
}

getPizza(randomPizza)
