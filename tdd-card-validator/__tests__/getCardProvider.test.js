const { getCardProvider } = require('../getCardProvider');


test('should recognize MasterCard', () => {
    // given
    const cardNumber = 5555555555554444
    // when 
    const result = getCardProvider(cardNumber)
    // then
    expect(result).toBe('MasterCard')
})

test('should recognize American Express', () => {
    // given
     const cardNumber = 371449635398431
     // when 
     const result = getCardProvider(cardNumber)
    // then
    expect(result).toBe('American Express')
})

test('should recognize Visa', () => {
    // given
    const cardNumber = 4111111111111111
   // when 
   const result = getCardProvider(cardNumber)
   // then
   expect(result).toBe('Visa')
})

test('should mark number as incorrect', () => {
    // given
    const cardNumber = 123
   // when 
   const result = getCardProvider(cardNumber)
   // then
   expect(result).toBe('Incorrect number')
})

test('should throw if provider cannot be recognized', () => {
    // given
    const cardNumber = 3566002020360505
   // then
   expect(() => {
       getCardProvider(cardNumber)
   }).toThrow('Cannot recognize card provider');
})