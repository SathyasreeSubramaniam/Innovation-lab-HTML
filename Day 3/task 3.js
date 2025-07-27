function performAction(callback) {
  console.log("Performing action...");
  callback();
}

function callbackFunction() {
  console.log("Callback function executed.");
}

performAction(callbackFunction);

function performTask(callback) {
  console.log("Task started...");
  setTimeout(() => {
    console.log("Task completed.");
    callback();
  }, 2000);
}

function onTestCompletion() {
  console.log("Task completion callback executed.");
}
performTask(onTestCompletion){
    var globalvar = "global";
    function exampleFunction(){
        var localvar = "local";
        if(true){
            let blockLet = "block let";
        const blockConst = "block const";
        console.log(blockLet);
        console.log(blockConst);
    }
    console.log(localVar); // Accessible within the function
}
console.log(globalVar);
exampleFunction();
        }
    
