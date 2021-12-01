// dot notation
const person = {
    name: 'truc',
}

console.log(person.name);
console.log(person['name']);

// square notation
const items = {
    'hello': ['item 1', 'item2']
}

const attribute = 'hello';
console.log(items[attribute]); // access attribute of the object through writing key strored in a variable
console.log(items.hello);

items[attribute] = ['item 5'];
console.log(items.hello);

// dynamic attribute
const windy = 'sunny';
const dynamicObj = {
    [windy]: 'The sky is beautiful'
}

console.log(dynamicObj);

