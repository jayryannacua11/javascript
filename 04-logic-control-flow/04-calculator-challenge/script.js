const calculator = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            console.log(`The sum is ${num1 + num2}`);
            break;
        case '-':
            console.log(`The difference is ${num1 - num2}`);
            break;
        case '*':
            console.log(`The product is ${num1 * num2}`);
            break;
        case '/':
            console.log(`The quotient is ${num1 / num2}`);
            break;
        default:
            console.log('Invalid Operator');
    }
}

calculator(10, 5, '+');
calculator(10, 5, '-');
calculator(10, 5, '*');
calculator(10, 5, '/');
calculator(10, 5, '&');