// const person: {
//     name: string;
//     age: number;
// } = 

const person = {
    name: 'Shubham',
    age: 25,
    hobbies: [ 'reading news', 'coding' ]
};

let favoriteActivities: string[];
favoriteActivities = ['cricket'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); // no error bcz hobby is of type string here
    // console.log(hobby.map()); !! ERROR !! => as mao method cant be operated on strings
}