console.log("No argument");
console.log("Best Argument found");
console.log("Best School Arguments found");

const numberOfArguments = process.argv.length;

if(numberOfArguments===2){
  console.log("No argument");
}else if (numberOfArguments===3){
  console.log("Argument found");
}else{
  console.log("Arguments found");
}
