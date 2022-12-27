var array1 = [1, 2,3,4,5];
let object = {
    name: 'name1',
    name2: 'name2',
    name3: 'name3',
}

console.log(array1)

var a = array1;
var b = [...array1, 4, 2];

console.log(a);
console.log(b);

b.map(a => {
    console.log(a);
})

console.log(object)

object.map(a => {
    console.log(a);
})