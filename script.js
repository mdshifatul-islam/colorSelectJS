const container = document.querySelector('#container');
const colorBox = document.querySelector('.colorBox');
const heading = document.querySelector('h2');
const span = document.querySelector('span');
const numbers = [14, 52, 65, 45, 2, 25, 65, 1002, 4651, 2000, 6000];
const products = [
    {
        name: 'Jhal Muri',
        amount: 5,
        price: 15
    },
    {
        name: 'fuska',
        amount: 5,
        price: 20,
    },
    {
        name: 'Cha',
        amount: 5,
        price: 8,
    },
    {
        name: 'Shingara',
        amount: 15,
        price: 5
    },
    {
        name: 'Burger',
        amount: 5,
        price: 70
    }
]
const votes = ['yes', 'no', 'yes', 'absent', 'yes', 'yes', 'no', 'yes', 'yes', 'absent'];
const election = ['BNP', 'Awami league', 'BNP', 'BNP', 'National Part', 'BNP', 'Awami league', 'BNP', 'BNP', 'National Part', 'Hero alom']

let colors = [
    'red',
    'green',
    'blue',
    'orange',
    'violet',
    'purple',
    'pink'
];
for(let color of colors){
    const box = document.createElement('div');
    box.classList.add('box');
    colorBox.appendChild(box);
    box.style.backgroundColor = color;

    box.addEventListener('click', function(){
        heading.innerHTML = "You have selected:";
        span.innerText = box.style.backgroundColor;
        span.style.backgroundColor = box.style.backgroundColor;
    })
}


const totalNumber = numbers.reduce(((acc, val) => acc + val), 200)
console.log(totalNumber);

const maxNumber = numbers.reduce((acc, val) => {
    if(acc > val) return acc
    else return val 
})
console.log(maxNumber);

const minNumber = numbers.reduce((acc, val) => Math.min(acc, val))
console.log(minNumber)


const productTotal = products.reduce(((acc, item) => acc + (item.amount * item.price)), 0)
console.log(productTotal);

const result = votes.reduce(((acc, vote) => {
    if(acc[vote]){ 
        acc[vote]++
    }
    else{ 
        acc[vote] = 1
    }

    return acc
}), {})
console.log(result);


const jitseKeta = election.reduce(((acc, party) => {
    if(acc[party]) acc[party]++
    else acc[party] = 1

    return acc;
}), {})
console.log(jitseKeta);