/* Luhn's Algorithm */

module.exports.isCardNumberValid = cardNumber => {

    const normalizedNumber = normalize(cardNumber);

    const firstSet = normalizedNumber
        .filter((_, index) => index % 2 === 0); 

    const secondSet = normalizedNumber
        .filter((_, index) => index % 2 === 1);

    const firstSum = firstSet
        .map(n => (n*2).toString())
        .reduce((curr, next) => {
            return curr + Number(next[0]) + (next[1] ? Number(next[1]) : 0)
        }, 0)

    const secondSum = secondSet.reduce((curr, next) => curr + next, 0);

    return (firstSum + secondSum) % 10 === 0;
}


function normalize(cardNumber) {
    return cardNumber.toString().length % 2 === 0
        ? [...cardNumber.toString()].map(n => Number(n))
        : [0, ...cardNumber.toString()].map(n => Number(n));
}
