"use strict";
//classes
class invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new invoice('mario', 'work on mario web', 250);
const invTwo = new invoice('luigi', 'work on lugi web', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = "yishi";
invOne.amount = 100;
console.log(invOne, invTwo);
console.log(invOne, invTwo);
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children);
//input
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
