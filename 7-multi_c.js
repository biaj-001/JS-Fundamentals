const x = parseInt(process.argv[2]);
let i = 0;
let output =";
    

if(isNaN(x)){
    console.log("Missing number of occurrences");
}else {
    while(i<x){
        output + ='C is fun\n';
        i++;
    }
    if(x>0){
        console.log(output.trimEnd());
}
