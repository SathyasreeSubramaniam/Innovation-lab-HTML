/---Function expression & Arrow functions---//
//---Declaration---//
function add(x,y){
    return x+y;
}

//---Expression---//
const add=function(x,y){
    return x+y;
};
console.log(add(2,3));

const add=(x,y)=>x+y;
console.log(add(2,2));