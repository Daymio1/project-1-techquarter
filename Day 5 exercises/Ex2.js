// 2. Write a function that takes two objects as arguments.
//     Merge both objects and create another object that has fields from the arguments.
//     Return the resulting object
//     Ex: For an input {'a': 1, 'b': 2}, {'c': 3, 'd': 4} it should return another object with the properties 'a', 'b', 'c', 'd'.

const object1 = {
    a: 1,
    b: 2
};

const object2 = {
    c: 3,
    d: 4
};

function mergeObjects(ob1, ob2) {
    const newObj = {...ob1, ...ob2}; // merging with spread operator
    return newObj;
};

console.log(mergeObjects(object1, object2));