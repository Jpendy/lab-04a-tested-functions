

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

function isEven(x, y){
    if(x % 2 === 0){
        return true;
    }
    if(y % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

test('isEven function', function(assert){

    //Arrange
    //Setup

    const x = 6;
    const y = 7;
    const expected = (true, false);

    //Act

    const result = isEven(x, y);

    //Assert

    assert.equal(result, expected);

});