arr = ["suraj", "maria", "sadika", "shwetha"]
flag = false

for(i = 0;i < arr.length;i++){
    if( "test" === arr[i]){
        flag = true
    }
}

if (flag === true){
    console.log("Present")
}else{
    console.log("Absent")
}
