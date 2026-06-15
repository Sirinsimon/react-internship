let num =[4,45,67,87,45,34]
let newarr=[]
let odd;
newarr=num.map((data)=>data*10)
console.log(newarr);
odd=num.filter(function(value){
    return value%2==1
})
console.log(odd)