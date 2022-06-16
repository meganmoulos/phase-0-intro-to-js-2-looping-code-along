// Code your solutions in this file

const thankYouCards = [];

function writeCards(names, eventName) {
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return(thankYouCards);
}

function countDown(num) {
    let i = 0;
    while (num > -1) {
        console.log(num);
        num = num - 1;
        i++;
    } 
    return num;
}
