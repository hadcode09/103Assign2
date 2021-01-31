//- The user can enter information such as product's name, quantity, price and the program should display the info on the console. Use the prompt to get the required information.

var proName=prompt("enter your product name");
var quantity=prompt("enter your quantity");
var price=prompt("enter your price");

console.log(`You brought ${quantity}  ${proName} product and each one cost ${price}.`);

document.write(`You brought ${quantity}  ${proName} product and each one cost ${price}.`);

//-The system should calculate the final price adding taxes (like in Mexico 16% of taxes).
var q= quantity;
var p= price;

function multi(q,p){
    return q*p;
}

console.log(multi(q,p));
console.log(multi(q,p)* .16);
console.log((multi(q,p)) + (multi(q,p)* .16));

document.write(`<br> Your Total amount is ${multi(q,p)}`);
document.write(`<br> Your Total tax amount is ${multi(q,p)*.16}`);
document.write(`<br> Your full Total amount is ${(multi(q,p)) + (multi(q,p)* .16)}`);
