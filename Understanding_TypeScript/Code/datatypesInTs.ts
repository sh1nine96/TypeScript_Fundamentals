// number data type
var a: number = 123;
var b: number = 123.4567;
var c: number = 1010111;
var d: number = 0o502;

// we have to put 0o first and then the octal number for octal number

var e: number = 0x345a4f3;

// we have to put 0x first and then number for hexa decimal

// string data type
var f: string = "Hii";
var g: string = "Hii learners";
var h: string = "c";
var i: string = "hiiis";

// boolean
var j: boolean = true;
var k: boolean = false;

// null and undefined
var l: number = null;
var m: number = undefined;

// any
var n: any = "Great Learning";
var o: any = 12;
var p: any = [12, "122", 0xabdde, true, null, undefined];

// Array
var q: Array<string> = ["Hello..."];

// tuple
var r: [boolean, number] = [true, 12];

// union type
// it will take number or string in any order
var s: (number | string)[] = ["Evening", 45, 123, "Night"];

// enum type
// will return the value based on number making first value as 0

// 1. Number enums
enum Games_1 {
  VideoGames,
  OutoorGames,
  IndoorGames,
}

enum Games_2 {
  VideoGames = 1, // can start with any number
  OutoorGames,
  IndoorGames,
}

enum Games_3 {
  VideoGames = 10,
  OutoorGames = 4,
  IndoorGames = 1,
}

// 2. String enums
enum Sports {
  Cricket = "CRICKET",
  Football = "FOOTBALL",
  Hockey = "HOCKEY",
  BasketBall = "BASKETBALL",
}

// 3. Heterogenous(number and string together) enums
// here the location value will become 46 by default
enum Brands_1 {
  Puma = "Puma",
  Branches = 45,
  location,
}

enum Brands_2 {
  Puma = "Puma",
  location = 12,
  StoreLocation = "Delhi",
}

console.log("\n-------------------------Number data type-------------------------\n")
console.log(typeof a,' : ', a)
console.log(typeof b +' : '+ b)
console.log(typeof c +' : '+ c)
console.log(typeof d +' : '+ d)
console.log(typeof e +' : '+ e)

console.log("\n-------------------------String data type-------------------------\n")

console.log(typeof f +' : '+ f)
console.log(typeof g +' : '+ g)
console.log(typeof h +' : '+ h)
console.log(typeof i +' : '+ i)

console.log("\n-------------------------boolean data type-------------------------\n")

console.log(typeof j +' : '+ j)
console.log(typeof k +' : '+ k)

console.log("\n-----------------null and undefined data type-------------------\n")

console.log(typeof l +' : '+ l)
console.log(typeof m +' : '+ m)

console.log("\n-------------------------any data type-------------------------\n")

console.log(typeof n +' : '+ n)
console.log(typeof o +' : '+ o)
console.log(typeof p +' : '+ p)

console.log("\n-------------------------array data type-------------------------\n")

console.log(typeof q +' : '+ q)

console.log("\n-------------------------tuple data type-------------------------\n")

console.log(typeof r +' : '+ r)

console.log("\n-------------------------Union data type-------------------------\n")

console.log(typeof s +' : '+ s)

console.log("\n-------------------------enum data type-------------------------\n")

console.log("\n------enum data type with default number representation------\n")

console.log(typeof Games_1 +' : '+ Games_1[0])
console.log(typeof Games_1 +' : '+ Games_1["VideoGames"])
console.log(typeof Games_1 +' : '+ Games_1.IndoorGames)

console.log("\n-----enum data type with change of starting number reresentation-----\n")

console.log(typeof Games_2 +' : '+ Games_2[2])
console.log(typeof Games_2 +' : '+ Games_2["OutoorGames"])
console.log(typeof Games_2 +' : '+ Games_2.VideoGames)

console.log("\n----------enumdata type with customized number representation-----------\n")

console.log(typeof Games_3 +' : '+ Games_3[10])
console.log(typeof Games_3 +' : '+ Games_3["IndoorGames"])
console.log(typeof Games_3 +' : '+ Games_3.OutoorGames)

console.log("\n---------------enum data type with string representation---------------\n")

console.log(typeof Sports +' : '+ Sports.BasketBall)
console.log(typeof Sports +' : '+ Sports["BasketBall"])

console.log("\n-----------enumdata type with heterogenous representation-----------\n")

console.log(typeof Brands_1 +' : '+ Brands_1.Branches)
console.log(typeof Brands_1 +' : '+ Brands_1.location)
console.log(typeof Brands_1 +' : '+ Brands_1.Puma)
