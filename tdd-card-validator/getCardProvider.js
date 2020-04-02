module.exports.getCardProvider = cardNumber => {
    if(isCardNumberValid(cardNumber)) {
        return getProvider(cardNumber)
    } else {
        return 'Incorrect number';
    }
}

function isCardNumberValid(cardNumber){

}

function getProvider(cardNumber) {

}