module.exports.getProvider = cardNumber => {
    const cardNumberString = cardNumber.toString();
    if(isMasterCard(cardNumberString)) {  
        return 'MasterCard'
    } else if(isAmericanExpress(cardNumberString)) {
        return 'American Express'
    } else if(isVisa(cardNumberString)) {
        return 'Visa'
    } else {
        throw new Error('Cannot recognize card provider');
    }

}

function isMasterCard(cardNumberString) {
    const isLength = cardNumberString.length === 16;
    const isPrefix = ['51', '52', '53', '54', '55'].includes(cardNumberString.substring(0,2));
    return isLength && isPrefix;
}

function isAmericanExpress(cardNumberString) {
    const isLength = cardNumberString.length === 15;
    const isPrefix = ['34', '37'].includes(cardNumberString.substring(0,2));
    return isLength && isPrefix;
}

function isVisa(cardNumberString) {
    const isLength = cardNumberString.length === 13 || cardNumberString.length === 16;
    const isPrefix = cardNumberString.startsWith('4');
    return isLength && isPrefix;
}