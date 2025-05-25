

const arg =process.argv[2];

if (isNaN(arg)){
    console.log("Missing number of occurrences");
}else{
    const count =Number(arg);
    for(let i=0;i<count;i++){
        console.log("C is fun");
    }
}
