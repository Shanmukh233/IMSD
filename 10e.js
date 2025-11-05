exports.add=function(a,b){
    return a+b;
};
exports.multiply=function(a,b){
    return a*b;
};
const calc=require('./calculator');
console.log('Addition:',calc.add(5,3));
console.log('Multiplication:',calc.multiply(5,3));