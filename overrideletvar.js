"use strict";
let a = 10;
{
    let a = 20;
    console.log(a); //20
}
console.log(a); //10

//What if change let to var?