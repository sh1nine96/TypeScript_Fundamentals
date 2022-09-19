//      const person: {
//      name: string;
//      age: number;
//      } =

    // const person: {
    // name: string;
    // age: number;
    // hobbies: string[];
    // role: [number, string];
    // } = {
    // name: "Shubham",
    // age: 25,
    // hobbies: ["reading news", "coding"],
    // role: [1, "author"],
    // };
     // Tuples are fixed length array

    // person.role.push('admin'); No error an exception for tuples in typescript
    // person.role[1] = 10; Error=> Type 'number' is not assignable to type 'string'
    // person.role = [2, 'user', 'admin']; ERROR=> Source has 3 element(s) but target allows only 2


    // const ADMIN = 0;
    // const READ_ONLY = 1;
    // const AUTHOR = 2;
    // we can assign roles to the person using above constants but we have enum in typescript
    // to make it easier

// here we will be working with enum type

enum Role {ADMIN, READ_ONLY, AUTHOR}// we can use it inside person object

    const person = {
    name: "Shubham",
    age: 25,
    hobbies: ["reading news", "coding"],
    role: Role.ADMIN
    };

   

    let favoriteActivities: string[];
    favoriteActivities = ["cricket"];

    console.log(person.name);

    for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); // no error bcz hobby is of type string here
    // console.log(hobby.map()); !! ERROR !! => as mao method cant be operated on strings
    }
