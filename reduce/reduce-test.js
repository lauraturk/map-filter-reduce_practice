require('mocha')
require('locus')
const expect = require('chai').expect

describe('reduce tests', () => {

  it('should add all the numbes together', () => {
    let numbers = [32, 1, 21, 5, 81, 333]

    let result = numbers.reduce((accuNum, secondNum) => {
      return accuNum + secondNum
    });

    expect(result).to.equal(473)
  })

  it('should subtract all the numbers', () => {
    let numbers = [28, 12, 38, 1, 91]

    let results = numbers.reduce((accuNum, secondNum) => {
      return accuNum - secondNum
    });

    expect(results).to.equal(-114)
  })

  it('should multiply a list of number', ()=> {
    let numbers = [2, 3, 5, 7]

    let results = numbers.reduce((accuNum, secondNum) => {
      return accuNum * secondNum
    }, 1);

    expect(results).to.equal(210)
  })
  it('subtract the smallest number' , () => {
    let elements = [[8, 5, 3], [1, 9, 11], [4, 7, 2], [19, 34, 6]]
    let trashbin = []

    let results = elements.forEach(elementArray => {
      // eval(locus)
      elementArray.reduce((accuNum, nextNum) => {
        accuNum < nextNum ? elementArray[accuNum] 
        console.log(accuNum)
        // 100 - smallNum
      })
    })

    expect(results).to.equal(88)
  })

  it.skip('all second values add together', () => {
    let elements = [["a", 1], ["b", 9], ["c", 21]]
    // initial value is 10
    // your code goes here
    expect(results).to.equal(31);
  });

  it('divide 560 by a gang of numbers ', () => {
    let numbers = [2, 2, 2, 5, 7]
     // inital value is 560
     // your code goes here

    expect(results).equal(2);
  })

  it('capitalize keywords in a phrase', () => {
    let keywords = ["fish", "blue"]
    let saying = 'one fish two fish red fish blue fish'
     // your code goes here
    expect(results).to.equal('one FISH two FISH red FISH BLUE FISH')
  })

  it('find smallest key and value inside of the object', () => {
    let arrayOfObjects = {a: 100, b: 200, c: 300, d: 600}
    // your code goes here

    expect(smallestValue).to.deep.equal({a:100})
  })

});
