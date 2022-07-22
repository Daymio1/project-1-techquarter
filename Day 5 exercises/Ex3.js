// 3. Write a function that takes an array of strings as argument. Group those strings by their first letter. 
//     Return an object that contains properties with keys representing first letters
//     The values should be arrays of strings containing only the corresponding strings
//     For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
//     Ex: { a: ['Alf', 'Alice'], b: ['Ben']}

const Arr = ['Alf', 'Alice', 'Ben', 'Jack'];

function groupByLetter(arr) {
    let result = {};

    for(let i = 0; i< arr.length; i++) {
        let currentWord = arr[i];
        let firstChar = currentWord[0].toLowerCase();
        let innerArray = [];
        
        if(result[firstChar] === undefined) {
            innerArray.push(currentWord);
            result[firstChar] = innerArray;
        } else {
            result[firstChar].push(currentWord);
        }
    }
    return result;
}

console.log(groupByLetter(Arr));