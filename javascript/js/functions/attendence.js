var classA = ["abc","def","ghi"]
var classB = ["jhk","lmn","opq"]


function attendence(arr,name){
    for(var i =0;i< arr.length;i++){
        if(arr[i] === name){
            return "Present"
        }
    }
    return "Absent"
}

console.log(attendence(classA,"abc"))
console.log(attendence(classB,"test"))