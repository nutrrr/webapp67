const matches = (obj, source) =>
 Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);


const car1 = {type:"Fiat", model:"500", color:"white"};
const car2 = {type:"Fiat", model:"100", color:"white"};
const car3 = {type:"Fiat", model:"500", color:"white"};
console.log(matches(car1, car2))
console.log(matches(car1, car3))