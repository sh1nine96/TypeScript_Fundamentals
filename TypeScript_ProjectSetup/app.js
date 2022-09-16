// const person: {
//     name: string;
//     age: number;
// } = 
var person = {
    name: 'Shubham',
    age: 25,
    hobbies: ['reading news', 'coding']
};
var favoriteActivities;
favoriteActivities = ['cricket'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); // no error bcz hobby is of type string here
    // console.log(hobby.map()); !! ERROR !! => as mao method cant be operated on strings
}
