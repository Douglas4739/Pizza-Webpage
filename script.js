let pizza = ["Pepperoni & Jalapeno", "Meatlovers", "Steak & Bacon"];
//console.log(pizza.length)
//console.log(pizza[1])

function getPizza(per1){
  for(let i = 0; i < per1.length; i++)
  console.log(pizza[i]);
}
//getPizza(pizza);

function randomPizza(per1){
  for (let i =0; i < per1.length; i++)
  Math.floor(Math.random() * 3);
 if(i = 1 == true){
   console.log(pizza[0]);
 }
 if(i = 2 == true){
   console.log(pizza[1]);
 }
 if(i = 3 ==true){
   console.log(pizza[2]);
 }
}

getPizza(randomPizza)
randomPizza(pizza)
