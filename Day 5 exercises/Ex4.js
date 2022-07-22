// 4. Create a class called CustomList with these methods:
//     insertFirst(data)
//     insertLast(data)
//     getFirst()
//     getLast()

// Make sure you test the functionality by creating some objects.
// Bonus: Create a class for a LinkedList.

class CustomList {

    constructor(list) {
        this.list = list;
    };

    insertFirst(data) {
        if(this.list[0] === undefined) {
            this.list[0] = data;
        } else {
            for(let i = this.list.length; i > 0; i--) {
                this.list[i] = this.list[i -1];
            }
            this.list[0] = data;
        }
        console.log(`Data inserted on first position, value: ${this.list[0]}`);
    };

    insertLast(data) {
        this.list.push(data);
        console.log(`Data inserted on position ${this.list.length - 1} with the value: ${this.list[this.list.length - 1]}`);
    }

    getFirst() {
        return this.list[0];
    };

    getLast() {
        return this.list[this.list.length - 1];
    };
};

let arr = [];
const myList = new CustomList(arr);

//Tests

myList.insertFirst(1);
console.log(myList);
myList.insertFirst(50);
console.log(myList);
myList.insertLast(100);
console.log(myList);

console.log(myList.getFirst());
console.log(myList.getLast());

