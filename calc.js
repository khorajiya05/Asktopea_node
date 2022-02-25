a="Calculator"
console.log(a)

function add(x,y){
    console.log("addition =",x+y)
}

function mul(x,y){
    console.log("Multiplication =",x*y)
}


function div(x,y){
    console.log("Division =",x/y)

}


function bmi(x,y){
    console.log("BMI =",x*y)

}

module.exports.addition = add
module.exports.multiplication = mul
module.exports.Division = div
module.exports.BMI = bmi