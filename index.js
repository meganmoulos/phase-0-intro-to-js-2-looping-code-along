// Code your solutions in this file

const thankYouCards = [];

function thankYou(names, eventName) {
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        debugger;
    }
    return(thankYouCards);
}

thankYou(["Charlie", "Samip", "Ali"], "birthday");

console.log(thankYouCards);