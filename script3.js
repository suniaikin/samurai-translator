// Do you have enough funds to buy my 3 items?

let balance = 10000

document.write('Results', ':', '<br>');

const customer0Price = prompt('How much are you willing to pay?');

if (customer0Price <= balance) {
	document.write('The 1st product is yours!');
	balance = balance - customer0Price
} else {
	document.write('Unfortunately, I cannot sell it for the requested price', '<br>');
}
document.write('<br>')

const customer1Price = prompt('How much are you willing to pay?');

if (customer1Price <= balance) {
	document.write('The 1st product is yours!');
	balance = balance - customer1Price
} else {
	document.write('Unfortunately, I cannot sell it for the requested price', '<br>');
}

document.write('<br>')


const customer2Price = prompt('How much are you willing to pay?');

if (customer2Price <= balance) {
	document.write('The 1st product is yours!');
	balance = balance - customer2Price
} else {
	document.write('Unfortunately, I cannot sell it for the requested price', '<br>');
}
document.write('<br>', balance)


