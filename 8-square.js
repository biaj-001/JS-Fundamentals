const sizeStr =process.argv[2];

const size = parseInt(sizeStr);

if(isNaN(size)){
    console.log("Missing size");
}else {
    const row ='x'.repeat(size);

    for(let i=0;i<size;i++){
        console.log(row);
    }
}
