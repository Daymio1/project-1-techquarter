// 5. An Armstrong number is an n-digit number that is equal to the sum of the nth powers of its digits. 
//     Determine if the input number is an Armstrong number. Return either true or false.
//     Ex: 1^3 + 5^3 + 3^3 = 153

function isArmstrongNumber(number) {
    const digits = [];
    const allDigits = number.toString();

    const numberLength = allDigits.length;
    for(let i = 0; i < numberLength; i++) {
        digits.push(+allDigits.charAt(i));
    }

    let sum = 0;
    for(let i = 0; i < numberLength; i++) {
        sum += Math.pow(digits[i], numberLength);
    }

    if(sum === number) {
        console.log(`The number ${number} is an Armstrong Number`);
        return true;
    } else {
        console.log(`The number ${number} is not an Armstrong Number`);
        return false;
    }
};

/// Tests

let number = 153;

isArmstrongNumber(number);
isArmstrongNumber(2);
isArmstrongNumber(34);