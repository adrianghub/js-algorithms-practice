const {isCardNumberValid} = require('./cardNumberVerifier');
const {getProvider} = require('./cardProviders');


module.exports.getCardProvider = cardNumber => {
    if(isCardNumberValid(cardNumber)) {
        return getProvider(cardNumber)
    } else {
        return 'Incorrect number';
    }
}

