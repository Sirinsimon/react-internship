const users=[{fname:"suraj",sname:"pa"},
           {fname:"sam",sname:"pr"}

]
console.log(users)
let fullname;
fullname=users.map((data)=>data.fname +" "+data.sname)
console.log(fullname)