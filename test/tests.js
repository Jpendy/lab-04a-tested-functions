

const test = QUnit.test;

function subract(x, y) {
    return x - y;
}

// In: 7, 3
// Out: 4

test('subtract function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 7;
    const y = 3;
    const expected = 4;


    //Act 
    // Call the function you're testing and set the result to a const

    const difference = subract(x, y);

    //Assert
    // Make assertions about what is expected valid result
    // actual, expected
    assert.equal(difference, expected);
});


function multiply(x, y){
    return x * y;
}

// In: 7, 6
// Out: 42

test('multiply function', function(assert) {
    //Arrange
    //set up
    const x = 7;
    const y = 6;
    const expected = 42;

    //Act

    const product = multiply(x, y);

    //Assert

    assert.equal(product, expected);

});


function divide(x, y){
    return x / y;
}

//In: 20, 5
//Out: 4

test('divide function', function(assert){

    //Arrange
    //Set up

    const x = 20
    const y = 5
    const expected = 4

    //Act

    const quotient = divide(x, y);

    //Assert

    assert.equal(quotient, expected);

});

function isEven(x){
    if(x % 2 === 0){
        return true;
    }
    
    else {
        return false;
    }
}

test('isEven function', function(assert){

    //Arrange
    //Setup

    const x = 7;
    const expected = (false);

    //Act

    const result = isEven(x);

    //Assert

    assert.equal(result, expected);

});



// function getNumbers(x) {
//     const array = [];

//     for(let i = 0; i < x; i++); {

//     const itIsEven = i % 2 === 0;
    
//     if(itIsEven) {
//     array.push(i);}
//     }
//     return array;
// }

// test('getNumbers', function(assert) {

//     //Arrange
//     //Setup

//     const x = 9;
//     const expected = [2, 4, 6, 8];

//     //Act

//     const result = getNumbers;

//     //Assert

//     assert.deepEqual(result, expected);

// })