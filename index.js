var add = (a,b)=>a+b;

console.log(add(1,2));
let arr = [1,2,3,4,5];

arr.forEach(function(item)
{
    console.log(item);

});

arr.forEach((item)=>console.log(item));  



let obj = 
{
    name:"John",
    age:30,
    address:
    {
        city:"New York",
        country:"USA"
    },
    greet : function()
    {
        console.log("Hello, my name is " + this.name);
    }
}





console.log(obj);
console.log(obj.name);
console.log(obj.address.city);
console.log (obj.greet());

let arr1 = [1,2,3,4,5];
let arr2 = [...arr1];
arr2.push(1);
console.log(arr1);
console.log(arr2);
