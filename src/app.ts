//classes
class invoice {
    client: string;
    details: string;
    amount:number;

    constructor(c: string, d:string, a:number){
        this.client= c;
        this.details= d;
        this.amount= a;
    }

    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}

const invOne = new invoice('mario', 'work on mario web', 250);
const invTwo = new invoice('luigi', 'work on lugi web', 300);

let invoices:invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invOne.client = "yishi";
invOne.amount = 100;


console.log(invOne, invTwo );

console.log(invOne,invTwo);





// const form = document.querySelector('form')!;

const form =document.querySelector('.new-item-form') as HTMLFormElement ;

// console.log(form.children);

//input
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement

const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement


form.addEventListener('submit', (e:Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
    
})